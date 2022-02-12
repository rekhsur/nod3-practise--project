const mongoose = require(moongose)
moongose.connect("mongodb://127.0.0.1:27017/doctorscart"),{
    useNewUrlParser:true,
    autoIndex:false
}