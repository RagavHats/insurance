const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyname : {
        type : String,
        required : true,
        trim : true,
    },
    contactperson : {
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },
    email : {
        type : String, 
        required : true ,
        unique : true ,
        minlength : 3
    },
    address : {
        type : String , 
        required : true ,
        minlength : 3
    },
},{
        timestamps : true,
});

const Company = mongoose.model('company', companySchema);
module.exports = Company;