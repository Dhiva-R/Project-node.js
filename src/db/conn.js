const mongoose = require("mongoose");

mongoose.connect("mongodb:F8pALmmIlr21mDEE@cluster0@ac-qyvxrpa-shard-00-00.kszv2p0.mongodb.net:27017,ac-qyvxrpa-shard-00-01.kszv2p0.mongodb.net:27017,ac-qyvxrpa-shard-00-02.kszv2p0.mongodb.net:27017/?ssl=true&replicaSet=atlas-be57k5-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log(`connection successful`);
}).catch((e)=>
{
    console.log(e);
})