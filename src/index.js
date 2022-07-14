import app from "./app.js";
import { sequelize } from "./database/database.js";

/*
import './models/Project.js'
import './models/Task.js'
*/

/*
     await sequelize.sync({force:true}) -> esto permite que en base al modelo creado
     se exporte y se combierta en una entidad en la base de datos.
     y lo que esta dentro de las llaves hace que el modelo se importe de nuevo
     si se le hace algun cambio
*/

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión hacia la base de datos exitosa");
    await sequelize.sync({force:false})
    app.listen(3004);
    console.log("Servidor en el puerto 3004");
  } catch (error) {
    console.error("Existio un error con la conexión hacia la base de datos", error);
  }
}

main();
