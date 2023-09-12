
    console.log('user hit the server')
    const url=req.url
    //hom page 
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()

    }
   


server.listen(5000)