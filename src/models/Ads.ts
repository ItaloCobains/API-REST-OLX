import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instaces/mysql';

export interface AdsInstance extends Model {
    id: number,
    idUser: string,
    state: string,
    category: string,
    images: [Object],
    dataCreated: Date,
    title: string,
    price: number,
    priceNegotiable: boolean,
    description: string,
    views: number,
    status: boolean
};

export const Ads = sequelize.define<AdsInstance>('Ads', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    idUser: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    images: {
        type: DataTypes.BLOB
    },
    dataCreated: {
        type: DataTypes.DATE
    },
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    },
    priceNegotiable:{
        type: DataTypes.BOOLEAN
    },
    description: {
        type: DataTypes.STRING
    },
    views: {
        type: DataTypes.NUMBER
    },
    status:{
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'ads',
    timestamps: false
});