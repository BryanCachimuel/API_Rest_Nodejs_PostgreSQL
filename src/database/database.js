import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    "apiproyectos",
    "postgres",
    "admin1994", 
    {
        host:'localhost',
        dialect:'postgres'
    }
);