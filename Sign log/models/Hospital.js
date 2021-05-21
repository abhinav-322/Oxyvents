const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    beds: {
        type: Number,
        required : true
    },

    oxy: {
        type: Number,
        required : true
    },

    nonoxy: {
        type: Number,
        required : true
    },

    icu: {
        type: Number,
        required : true
    },

    ventilators: {
        type: Number,
        required : true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const Hospital = mongoose.model('Hospital' , HospitalSchema);
module.exports = Hospital;