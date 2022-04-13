import _knex from "knex";

const knex = _knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1", //LOCALHOST del servidor APACHE
    port: 3306,
    user: "root",
    password: "", // si no hay password hay que ponerlo igual y dejarlo vacío
    database: "ecommerce", // base de tatos creada en phpmyadmin
  },

  pool: { min: 2, max: 8, }, // va de 0 a 10. Configuración de hilos de consulta (pública)
});

knex.schema
  .createTableIfNotExists("productos", function (table) { 
    table.increments("id").primary();
    table.string("nombre");
    table.string("tipo");
    table.float("precio");
    table.string("imagen");
    table.integer("stock");
    table.integer("quantity");
    table.integer("total");
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').defaultTo(knex.fn.now());

  })
  .then(() => {
    console.log("Tabla de productos conectada");
  })
  .catch((err) => {
    throw err;
  });

//DESCOMENTAR ESTO PARA CREAR TABLA DE PRODUCTOS

// knex('productos').insert([
//   {
//     nombre: "Quarter",
//     tipo: "ropa",
//     precio: 1700,
//     imagen: "#",
//     stock: 12,
//     quantity: 0,
//     total: null
//   },
//   {
//     nombre: "GG",
//     tipo: "ropa",
//     precio: 2100,
//     imagen: "#",
//     stock: 13,
//     quantity: 0,
//     total: null
//   },
//   {
//     nombre: "GG",
//     tipo: "ropa",
//     precio: 1700,
//     imagen: "#",
//     stock: 4,
//     quantity: 0,
//     total: null
//   },
//   {
//     nombre: "GG",
//     tipo: "ropa",
//     precio: 1700,
//     imagen: "#",
//     stock: 13,
//     quantity: 0,
//     total: null
//   },
//   {
//     nombre: "Line",
//     tipo: "ropa",
//     precio: 1700,
//     imagen: "#",
//     stock: 12,
//     quantity: 0,
//     total: null
//   },
//   {
//     nombre: "Quarter",
//     tipo: "ropa",
//     precio: 1900,
//     imagen: "#",
//     stock: 5,
//     quantity: 0,
//     total: null
//   }
// ])
//   .then(() => {
//     console.log("Productos agregados");
//   })
//   .catch((err) => {
//     throw err;
//   });


export default knex;