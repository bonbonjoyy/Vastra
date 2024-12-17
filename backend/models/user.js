"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, {
        foreignKey: "user_id",
        as: "orders",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      kata_sandi: DataTypes.STRING,
      role: DataTypes.STRING,
      last_login: DataTypes.DATE,
      nama_lengkap: DataTypes.STRING,
      profile_image: DataTypes.STRING,
      is_google_account: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
