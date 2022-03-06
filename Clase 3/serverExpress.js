const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto httt://localhost:${PORT}`)
});

let product = fs.readFileSync(path.resolve(__dirname,'productos.json'));
let productos = JSON.parse(product);


class Random{
            async getById(id){
                try{
                        let data= fs.promises.readFile('productos.json','utf-8')
                        let events = JSON.parse(data);
                        let event = events.find(evt=>evt.id===id);
                    if(event){
                        return {result:evento}
                    }
                }catch(err){
                    return {message:"No se encontró el eve  nto"}
                }

            }
}


app.get('/productos', (req,res) => {
    res.json(productos)
});
app.get('/productosRandom', (req,res) => {
    res.json(Random)
});

server.on("error", (error) => console.log(error));  