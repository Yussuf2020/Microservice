import express from 'express'

const app = express()

app.use(express.json())


// Get all products
app.get('/api/products',(req,res)=>{
    const products = [
        {id:1,name:'Spagetti',price:50000},
        {id:2,name:'Desktop',price:2500},
        {id:3,name:'Phone',price:900},
        {id:4,name:'Tv',price:3000},
    ]
    res.status(200).json({products})
})

// Getting a single product
app.get("/api/products/:id",(req,res)=>{
        const products = [
        {id:1,name:'Laptop',price:2000},
        {id:2,name:'Desktop',price:2500},
        {id:3,name:'Phone',price:900},
        {id:4,name:'Tv',price:3000},
    ]

    const product = products.find(p=>p.id === Number(req.params.id))

    if(!product){
        res.status(404).json({message:"Product Not Found"})
    }
    res.status(200).json(product)
})

// Creating new products
app.post('/api/products',(req,res)=>{
    const newProduct = req.body

    newProduct.id = Date.now()
    res.status(201).json(newProduct)
})



const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Server has started running");
})