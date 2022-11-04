const express=require('express');
const path=require("path");
const app=express();
const hbs=require("hbs");

require("./db/conn");
const Register=require("./models/registers");
//const exp = require('constants');
const { json } = require('express');
//const e = require('express');
//const Registerr = require('./models/registers');


const PORT=process.env.PORT || 3000 


const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const templat_path=path.join(__dirname,"../templates/views/register");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views", template_path);

hbs.registerPartials(partials_path);


app.get('/',(req,res)=>
{
    res.render("index")
});

app.get("/register",(req,res)=>
{
    res.render("register");
})
app.get("/login",(req,res)=>
{
    res.render("login");
})


//create a new user in our database
app.post("/register",async(req,res)=>
{
   try{
    
    const password=req.body.password;
    const cpassword=req.body.confirmpassword;

    if(password===cpassword){
       
        const registerEmployee=new Register({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            password : password,
            confirmpassword :cpassword,
            gender : req.body.gender,
            email : req.body.email,
            phone : req.body.phone,
            security:req.body.security,
            Answer : req.body.Answer,
            
        })
     

       const registered =await registerEmployee.save();
       console.log("the page part" +registered);
      
       res.status(201).send("Registered Successfully!!");
    }
   
    else{
        res.send("password are not matching")
    }

   }catch(error){
    res.status(400).send(error);
   }
})


//Login check
const jwt = require("jsonwebtoken");
const e = require('express');
const bcrypt = require('bcrypt');

app.post('/login',async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

      const useremail =await Register.findOne({email:email});

      const isMatch = await bcrypt.compare(password,useremail.password);

      const token=await useremail.generateAuthToken();
      console.log("The token part "+token);

        if(isMatch){
            res.status(201).send("Login Successfully!");
        }else{
            res.send("Invalid password Details");
        }

    }catch(error){
        res.status(400).send("Invalid Email");
        console.log(error);
    }
})

app.get("/",(req,res)=>{
    var result='App is running'
    res.send(result);
}).listen(app.get('PORT'),function(){
    console.log('Server listening on port',app.get('PORT'));
})