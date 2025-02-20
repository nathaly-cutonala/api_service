import { DataTypes, Model } from "sequelize";
import container from "../config";
const sequelize = container.resolve("sequelize");

class User extends Model {}

User.init(
  {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(101),
      allowNull: true,
      defaultValue: null
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["woman", "man"],
      allowNull: true,
      defaultValue: null
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null
    },
    birthdate: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: null,
    },
    status:{
      type: DataTypes.ENUM,
      values: ["Activo","Inactivo"],
      allowNull: false,
      defaultValue: "Activo"
    },
    phone:{
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null
    }
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    createdAt: false,
    updatedAt: false
  }
);

export default User;