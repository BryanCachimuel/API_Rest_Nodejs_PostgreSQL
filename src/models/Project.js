import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database'

export const Projects = sequelize.define('projects',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    }
})

