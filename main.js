var express=require("express");
var app=express();
app.use(express.json());
const url="mongodb+srv://exam:123@cluster0.jgjd7.mongodb.net/?retryWrites=true&w=majority";

var {MongoClient}=require("mongodb");



var dbname="examportal";
const client = new MongoClient(url);
var dbinstance;
 function main() {
   
   client.connect().then( function(){
   console.log('Connected successfully to database');
   dbinstance= client.db(dbname);   
   const collection = dbinstance.collection('user');
   collection.insertOne({username:"admin",password:"123"});
   console.log("success");
   showdata();
   })
}
main();
/*function showdata()
{
 dbinstance.collection("user").find({}).toArray(function(err,data){
      console.log(data);});
}*/



app.get("/login",function(req,res){
  
   var ans=await dbinstance.collection("user").find({username:body.username,password:body.password}).toArray();    
   if(ans.length()!=0)
      res.send({login:"true"});
   })
app.get("/data",function(req,res){
     dbinstance.collection("user").find({}).toArray(function(err,data){
        res.send(data);
     })
})  
app.listen(4444,function(){
    console.log("App is live on port 4444");
})