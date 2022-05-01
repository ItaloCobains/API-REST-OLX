import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instaces/mysql';

export interface UserInstance extends Model {
    id: number,
    name: string,
    email: string,
    state: string,
    passwordHash: string,
    token: string,
};

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    state: {
        type: DataTypes.STRING
    },
    passwordHash: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false
});