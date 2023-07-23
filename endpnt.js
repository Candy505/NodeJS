const app = require('express')()
const PORT = 8080

app.get('/tshirt',(req,res)=> {
    res.status(200).send({
        tshirt: 'blue',
        price:'99'
    })
})

app.post('/tshirt/:id', (req,res)=>{
    const { id } = req.params;
    const {load} = req.body;

    if(!logo){
        
    }
})