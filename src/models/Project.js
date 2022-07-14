import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

import { Task } from './Task.js'

export const Project = sequelize.define('projects',{
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
    },
}, {
    timestamps: true
});

/* decimos que un proyecto puede tener muchas tareas */
Project.hasMany(Task, {
    foreigKey: 'projectId',
    sourceKey: 'id'
})

/* decimos que muchas tareas pueden pertener a un solo proyecto */
Task.belongsTo(Project, {
    foreigKey: 'projectId',
    targetId: 'id'
})

