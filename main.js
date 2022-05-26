const express = require('express')
const app = express()
const port = 5673
app.use(express.json())
app.get('/', (req, res) => {
	res.send('Hello World!')
})

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
   //showdata();
   })
}
main();

app.post("/login",function(req,res){
   console.log("request on post");
/*   dbinstance.collection("user").find({username:req.body.username,password:req.body.password}).toArray(function(err,data){
		 if(data.length()>0)
		   res.send({login:"true"});
	 });    
   */
  res.send("post working fine");
      
   })

app.get("/login",function(req,res){
	 console.log("request on get");
	 res.send("its working ");
})

app.get("*",function(req,res){
   res.send("Exam Portal Server");
})
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
