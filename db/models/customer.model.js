const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema =  {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
    },
    phone: {
        allowNull: true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    // Creamos un esquema para el campo userId
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Customer extends Model {

    static associate(models) {
        // Creamos la relación desde el modelo Customer hacia el modelo User
        // El foreignKey está en la tabla Customer que se relaciona con el campo id del modelo User
        this.belongsTo(models.User, { as: 'user' });
        // Un cliente puede tener muchas ordenes de compra
        this.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'customerId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: false
        }
    }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE };
