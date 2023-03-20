const https=require("https");

const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    
    res.sendFile(__dirname+"/index.html");
    
})

app.post("/",function(req,res){

const query=req.body.cityName;
const apiKey="bb6028bbd3e2ad4d4328ecc4e1127fcd";
const unit="metric";
const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
https.get(url,function(response){
    // console.log(response.statusCode);
    response.on("data",function(data){
      const weatherData=  JSON.parse(data);
      
      const temp=weatherData.main.temp;
      const weatherDescription=weatherData.weather[0].description;
      const icon=weatherData.weather[0].icon;
      const imgurl="https://openweathermap.org/img/wn/"+icon+"@2x.png";         
       res.write("<h1>the temp iin" +query+" is "+ temp+"degree celcius</h1>");
      res.write("<p>the weather iin" +query+" is "+ weatherDescription+"</p>");
      res.write("<img src="+imgurl+">");
      res.send();

    })
});
    
})




app.listen(3000,function () {
    console.log("the server is running on port 3000");
});