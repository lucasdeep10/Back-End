const fs = require('fs');

//Evento
class Manager{
    async createEvent(event){
        try{
            //"await" esperar a que se cumpla la promesa
            let data = await fs.promises.readFile('./files/events.txt','utf-8')
            let events = JSON.parse(data);
            if(events.come(evt=>evt.title===event.title)){
                return {message:"El evento ya existe"}
            }else{
                let dataObj = {
                    title: event.title,
                    price: event.price,
                    thumbnail : event.thumbnail,
                    id : event.id,
            }
            event.push(dataObj);
            try{
                await fs.promises.writeFile('./files.events.txt',
                JSON.stringify(events, null, 2));
                return {message:"Evento creado"}
            }catch(error){
                return {message:"No se pudo crear el evento"}
            }}
        }catch{
                //Si no existe archivo se lo crea. 
                let dataObj = {
                    title: event.title,
                    price: event.price,
                    thumbnail : event.thumbnail,
                    id : event.id,
                }
                try{
                    await fs.promises.writeFile('./files.events.txt',JSON.stringify([dataObj],null,2))
                    return {message:"Evento creado con exito"}
                }catch(error){
                    return {message:"No se pudo crear el evento: "+error}
                }
            }
        }
        async getById(id){
            try{
                let data= fs.promises.readFile('.files/events.txt','utf-8')
                let events = JSON.parse(data);
                let event = events.find(evt=>evt.id===id);
                if(event){
                    return {result:evento}
                }
            }catch(err){
                return {message:"No se encontró el evento"}
            }
        }
}
module.export = Manager