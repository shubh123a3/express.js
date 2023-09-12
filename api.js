const{ products } = request ('./data')
app.get('/',(req,res)=>{
    console.log('user hit the resources')
    res.status(200).send('home page ')
})
app.get('/api/products/:productID',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image}= product
        return{id,name,image}
    })
    res.json(newProduct)
})
app.get('/api/products/:productID',(req,res)=>{
    const {productID}= req.params
    const singleProduct =products.find(
        (product)=>product.id===number(productID)
    )
    if(!singleProduct)
    {
        return res.status(404).send('product dose not exist')
    }
    return res.json(singleProduct)

})
app.get('/api/products/:productID/reviews/:reviewId/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello word')
})
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const { serch,limit}=req.query  
    res.send("hello world")
    let sortedProducts=[...products]; 
    if(search)
    {
        sortedproduct=shortedProduct.filter(product=>{
            return product.name.startwith (search)
        })    }
    res.send('hello world ')
     
})
app.listen(5000,()=>{
    console.log('server is listing on port 5000..')
})
