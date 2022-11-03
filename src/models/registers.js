const mongoose=require("mongoose");
const bcrypt   = require('bcrypt');
const jwt=require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true,
    },
    confirmpassword : {
        type:String,
        required:true,
    },
    gender : {
        type:String,
        required:true,
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
  
    phone : {
        type:Number,
        required:true,
        unique:true
    },
    security : {
        type:String,
        required:true,
        
    },
    Answer : {
        type:String,
        required:true,
        
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
   
 
})
//generating tokens
employeeSchema.methods.generateAuthToken = async function(){
     try{
        console.log(this._id);
        const token=jwt.sign({_id:this._id.toString()},"mynameisdhivarajsangok");
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token;
     }catch(error){
        res.send("the errror part is" +error);
        console.log("the error part " +error);
     }
}
//convert password into hash
employeeSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.confirmpassword = await bcrypt.hash(this.password,10);
    }
});

const Register = new mongoose.model("Register",employeeSchema);

module.exports=Register;

