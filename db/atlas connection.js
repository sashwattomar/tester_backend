
    const mongoose = require('mongoose');
    const DB = process.env.ATLASLINK;

    mongoose.connect( DB ,{ useNewUrlParser: true,  useUnifiedTopology:true}// since it return promise
    ).then ( ()=>{ console.log(`database suceesfully connected`);}
           ).catch(( err)=> console.log(err));// catch for error

