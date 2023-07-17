const http = require('http')

const server = http.createServer((req,res) =>{
    console.log("Server started")

    if(req.url === '/'){
        res.end("homepage")
    }

    else if(req.url === '/about'){
        res.end("about page")
    }

    else
    {    res.end("error page")}
    
})

server.listen(5000,()=> {
    console.log("Server started at port no : 5000")
})








/*console.log("first")

//setTimeout is asynchronous

setTimeout(() => {
    console.log('second')
},0)

console.log('third')
*/