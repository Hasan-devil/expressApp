const express = require("express")
const fs = require("fs")
const parser = require("body-parser")
PORT = 3000
const file = "/data/data/com.termux/files/home/index.html"
const data = require("./data.json")
const app = express()

app.use(express.urlencoded({ extended:true }));
app.get("/page", (req,res ) => {
    res.send("hello world from express")
   })
app.get("/", (req,res) => {
   console.log("success"+__dirname)
   res.sendFile(file)
  
})

app.get("/names", (req,res) => {
    res.send(data)
})

app.post("/output", (req,res) => {
    console.log(req.body)
          data.push({
            id:data.length+1,
            name:req.body.name,
       description:req.body.description
        })
    fs.writeFile("./data.json",JSON.stringify(data), (err) => {
        if (err) {
            console.log(err)
        }
    })
    res.send(data)
})
 

app.listen(PORT)
