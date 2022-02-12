//--------DESAFIO Clase 1--------
class Usuario {
    constructor (nombre, apellido, libros, mascotas){ 
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascotas(mascota){
       this.mascotas.push(mascota)
    }
    countMascotas(){
        
    }
    addBook({id,nombre,autor}){

       this.libros.push({
        id:id,
        nombre: nombre,
        autor: autor,
})
       
    }
    getBookNames(id){
        this.libros.forEach(libros => {
          if(libros.id===id){
              return `${this.nombre}`
          }
        })
    }
};



let usuario1 = new Usuario ('Lucas', 'Ferreyra', [], ["perro", "gato"])
let mascota = "loro"

console.log(usuario1.getFullName());
usuario1.addMascotas(mascota);
usuario1.addBook({
    id:1,
    nombre:'Harry Potter', 
    autor:'J. K. Rowling',
});
usuario1.addBook({
    id:2,
    nombre:'El señor de los anillos',
    autor:'Tolkien',
});
console.log(usuario1.getBookNames(1,2));
console.log(usuario1);

