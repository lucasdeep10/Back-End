const express = require('express');
const ContenedorAdopcion = require('./classes/ContenedorAdopcion');
const app = express();
const server = app.listen(8080,()=>{
    console.log("server listening on port 8080")
})
const contenedor = new ContenedorAdopcion();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/api/users',(req,res)=>{
    contenedor.getAllUsers().then(result=>{
        res.send(result);
    })
})
app.get('/api/pets',(req,res)=>{
    contenedor.getAllPets().then(result=>{
        res.send(result);
    })
})
app.post('/api/adoption',(req,res)=>{
    let userId = parseInt(req.body.uid);
    let petId = parseInt(req.body.pid);
    contenedor.adoptPet(userId,petId).then(result=>{
        res.send(result);
    })
})
app.post('/api/users',(req,res)=>{
    let user = req.body;
    console.log(user);
    contenedor.registerUser(user).then(result=>{
        res.send(result);
    })
})
app.post('/api/pets',(req,res)=>{
    let pet = req.body;
    contenedor.registerPet(pet).then(result=>{
        res.send(result);
    })
})
app.put('/api/users/:uid',(req,res)=>{
    let body = req.body;
    let id = parseInt(req.params.uid);
    contenedor.updateUser(id,body).then(result=>{
        res.send(result);
    })
})
app.put('/api/pets/:pid',(req,res)=>{
    let body = req.body;
    let id = parseInt(req.params.pid);
    contenedor.updatePet(id,body).then(result=>{
        res.send(result);
    })
})
app.get('/api/pets/:pid',(req,res)=>{
    let id = parseInt(req.params.pid);
    contenedor.getPetById(id).then(result=>{
        res.send(result);
    })
})
app.get('/api/users/:uid',(req,res)=>{
    let id= parseInt(req.params.uid);
    contenedor.getUserById(id).then(result=>{
        res.send(result);
    })
})
app.delete('/api/users/:uid',(req,res)=>{
    let id= parseInt(req.params.uid);
    contenedor.deleteUser(id).then(result=>{
        res.send(result);
    })
})
app.delete('/api/pets/:pid',(req,res)=>{
    let id= parseInt(req.params.pid);
    contenedor.deletePet(id).then(result=>{
        res.send(result)
    })
})