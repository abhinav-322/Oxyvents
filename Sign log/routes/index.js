const express = require('express');
const router = express.Router();

//hospital model
const Hospital = require('../models/Hospital');

//Welcome page
router.get('/',(req,res) => res.render('welcome'));

//Hospital page
router.get('/dashboard',(req,res) =>
res.render('dashboard', {
    name: req.user.name

}));

// Hospital Handle
router.post('/dashboard',(req, res) => {
    const{ beds, oxy, nonoxy, icu, ventilators} = req.body;

   const newHospital = new Hospital({
       beds,
       oxy,
       nonoxy,
       icu,
       ventilators
   });

  //save info
  newHospital.save()
  .then(Hospital => {
      res.redirect('/dashboard');
  })
  .catch(err => console.log(err));
});

module.exports = router;