const express= require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
   res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res){
    const firstName=req.body.fname;
    const lastname=req.body.sname;
    const email=req.body.email;
    
    const data={
        members:{
            email_address: email,
            status:"suscribed",
            merge_fields:{
                FNAME:firstName;
                LNAME:lastname;
            }
    }
    };
    const jsonData=JSON.stringify(data);
    const url="https://mandrillapp.com/api/1.0/lists/ba17855af3"
    https.request(url,options,function(response){

    })
})


 
app.listen(3000,function(){
    console.log("the server is on the port 3000");
})


// 52ab0dc558e6fcc218abaa8ed51f3b15-us11

// audience id : ba17855af3