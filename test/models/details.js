const mongoose = require('mongoose');

const { Schema } = mongoose;

const detailsSchema = new Schema({

    practiceName: 'String',
    practiceType: 'String',
    firstName: 'String',
    lastName: 'String',
    profDesig: 'String',
    add1: 'String',
    add: 'String',
    city: 'String',
    state: 'String',
    zip: 'String',
    phone: 'String',
    fax: 'String',
    gender: 'String',

});

module.exports = mongoose.model('Details Schema', detailsSchema);;