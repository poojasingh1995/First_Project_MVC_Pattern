const express=require("express");
const app=express();
const bodyparser=require("body-parser")
const port=8000;
const user=require("./Router/user")

app.use(bodyparser.json())
app.use('/',user)
app.listen(port,()=>{
    console.log(`http://localhost: ${port}`)
})