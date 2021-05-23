const express = require('express');
const router = express.Router();

//hospital model
const Hospital = require('../models/Hospital');

//Welcome page
router.get('/',(req,res) => res.render('welcome'));

//Hospital page
router.get('/dashboard',(req,res) =>
res.render('dashboard', {
    name: req.user.name,
   

}));


// Hospital Handle
router.post('/dashboard',(req, res) => {
    const{ email,beds, oxy, nonoxy, icu, ventilators} = req.body;

    console.log(req.body);

    Hospital.findOne({email : email})
    .then(hospital => {
        const newHospital = new Hospital({
            email,
            beds,
            oxy,
            nonoxy,
            icu,
            ventilators
        });

        //save info
  newHospital.save()
  .then(hospital => {
      res.redirect('/main');
  })
  .catch(err => console.log(err));
});
    });


//mainpage
router.get('/main',(req,res) =>
 res.render('main',{
     username: req.user.name,
     uid: req.user._id,
    beds: req.hospital.beds
    
 }));

module.exports = router;