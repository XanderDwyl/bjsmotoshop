var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var userSchema = new Schema( {
    FirstName: {
        type     : String,
        required : true,
        match    : /^[a-zA-Z\s]{1,30}$/
    },
    MiddleName: {
        type     : String,
        required : true,
        match    : /^[a-zA-Z\s]{1,30}$/
    },
    LastName: {
        type     : String,
        required : true,
        match    : /^[a-zA-Z\s]{1,30}$/
    },
} );

mongoose.model( 'User', userSchema );