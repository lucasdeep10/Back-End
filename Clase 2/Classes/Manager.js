const fs = require("fs");

class Container {
  constructor(filename) {
    this.filename = filename;
    this.data = [];
  }

  async save(obj) {
    try {
      if (!fs.existsSync(this.filename)) {
        return this.createFile(obj);
      } else {
        this.data = await this.getAll();
        return this.createFile(obj);
      }
    } catch (err) {
      console.log(
        "Error"
      );
    }
  }

  async readFile() {
    try {
      return await fs.promises.readFile(this.filename, "UTF-8");
    } catch (err) {
      console.log("Error");
    }
  }

  async createFile(obj) {
    try {
      obj.id = this.getMaxId() + 1;
      this.data.push(obj);
      await fs.promises.writeFile(this.filename, JSON.stringify(this.data));
      console.log(
        "Agregado"
      );
      return obj.id;
    } catch (err) {
      console.log("ERROR");
    }
  }

  async getAll() {
    try {     
        let buffer = await fs.promises.readFile(this.filename, 'UTF-8')
        return JSON.parse(buffer);
    }
      catch (err) { 
        console.log('No hay productos');
        return null;     
   }      
}

  async deleteAll() {
    fs.unlink(this.filename, (err) => {
      if (err) {
        console.log(
          "ERROR"
        );
      } else {
        console.log("Eliminado exitosamente");
      }
    });
  }

  getMaxId() {
    var maxValue = Number.MIN_VALUE;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id > maxValue) {
        maxValue = this.data[i].id;
      }
    }
    return maxValue;
  }

  async getById(id) {
    try {
      let aux = await this.getAll();
      return aux.find((obj) => obj.id == id) || null;
    } catch (err) {
      console.log(
        "ERROR"
      );
    }
  }

  async deleteById(id) {
    let aux = await this.getAll();
    let x = aux.findIndex((obj) => obj.id == id);
    aux.splice(x, 1);
    await fs.promises.writeFile(this.filename, JSON.stringify(aux));
    console.log(
      "Eliminado "
    );
  }
}

(async function(){

  /* -----  Crear Objeto -----  */
  const objRule = {
    title: "Coca Cola 500ml",
    price: 100.00,
    thumbnail:
      "https://via.placeholder.com/150",
  };

  const objCalculator = {
    title: "Coca Cola 1.75l",
    price: 150.00,
    thumbnail:
      "https://via.placeholder.com/150",
  };

  const objEarth = {
    title: "Coca Cola 2.25l",
    price: 200.00,
    thumbnail:
      "https://via.placeholder.com/150",
  };

  /* -----  Contenedor ----- */
  const Contenedor = new Contenedor("productos.json");

    /* -----  Obtener todos los objetos  ----- */
    console.log("Todos los objetos");
    var x = await Contenedor.getAll();
    console.log(x);

  /* -----  Guardar  ----- */
  console.log("Archivo guardado");
  console.log("Return:" , await Contenedor.save(objEarth))
  console.log("Return:" , await Contenedor.save(objRule))
  console.log("Return:" , await Contenedor.save(objCalculator))
  console.log("Return:" , await Contenedor.save(objEarth))
  console.log("Return:" , await Contenedor.save(objRule))
  console.log("Return:" , await Contenedor.save(objEarth))
  console.log("Return:" , await Contenedor.save(objCalculator))
  console.log("Return:" , await Contenedor.save(objRule))

  /* -----  Lista  ----- */
  console.log("Lista");
  var x = await Contenedor.getAll();
  console.log(x);

  /* -----  Buscar por ID  ----- */
  console.log(
    "Busqueda por ID"
  );
  x = await Contenedor.getById(7);
  console.log(`Producto recuperado: "${JSON.stringify(x)}"`);

  /* -----  Eliminar archivo buscado -----  */
  console.log("\nArchivo eliminado");
  await Contenedor.deleteById(7);

  /* -----  Busqueda de archivo -----  */
  console.log("Buscar archivo");
  x = await Contenedor.getById(7);
  console.log(`Producto encontrado: "${JSON.stringify(x)}"`);



  /* -----  Eliminar archivo -----  */
  console.log("Archivo eliminado");
  await Contenedor.deleteAll();

})(); 