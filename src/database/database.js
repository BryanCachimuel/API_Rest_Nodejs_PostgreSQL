import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "apiproyectos", // db name,
  "postgres", // username
  "admin1994", // password
  {
    host: "localhost",
    dialect: "postgres",
    logging: false
  }
);