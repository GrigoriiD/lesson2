const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
   const a = '../git2'
  
   let body = null
    //   fs.readFileSync('../img/img3.jpg')         
    try {
        body = fs.readFileSync(`${a}${req.url}`) 
    } catch (e) {
        console.log(e);
       body = fs.readFileSync('./index.html')
    }
    console.log(req.url);
    res.end(body)
    
})
const port = process.env.PORT || 3000
server.listen(port)
console.log(`Server started.Server started :${port}`);