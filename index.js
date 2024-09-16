const express=require('express');
const app=express();
// console.dir(app);
// app.use((req,res)=>{  // first parameter is request and second parameter is response
//     console.log("we got a request");
//     res.send("<h1> ohh we got response and this our response 🤘</h1>")
// })

// get method used to path different path
app.get('/r/:abc',(req,res)=>{
    const {abc}=req.params;
    res.send(`this is subroutine request : ${abc}`);
})
app.get('/cat',(req,res)=>{
    console.log("cat request");
    res.send("<h1>mweoo mewo</h1>");
})

app.get('/dog',(req,res)=>{
    console.log("cat request");
    res.send("<h1>Bau bua</h1>");
})
app.post('/cat',(req,res)=>{
    res.send('inside post !!!');
})
app.get('/search',(req,res)=>{
    const {q}=req.query;
    res.send(`<h1> search result for ${q}`);
})
app.get('*',(req, res)=>{
    // console.log()
    res.send('any thing');
})
app.listen(3000,()=>{
    console.log("listening port 3000");  
})