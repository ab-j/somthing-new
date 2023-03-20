const express=require('express');
const app=express();

app.get("/",function(request,response){
    response.send("hello everyone");
})
app.listen(3000,function(){
    console.log("server stated at 3000 port");
});