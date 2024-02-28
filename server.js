const http= require('http')

const server= http.createServer((req,res)=>{

    if(req.url=='/home'){
        res.write('welcome to home')
    }
    else if(req.url=='/about'){
        res.write('welcome to about')
    }
    res.end()
})



server.listen(5000,()=>{console.log('server run at port 5000')})