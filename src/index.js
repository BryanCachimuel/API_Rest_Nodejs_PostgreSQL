import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión hacia la base de datos exitosa");
    app.listen(3004);
    console.log("Servidor en el puerto 3004");
  } catch (error) {
    console.error(
      "Existio un error con la conexión hacia la base de datos",
      error
    );
  }
}

main();
