const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dhiva:iKLB742OeVZuAJ4X@cluster0.kszv2p0.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log(`connection successful`);
}).catch((e)=>
{
    console.log(e);
})