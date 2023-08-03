"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: "theme_id" });
    }
  }
  Question.init(
    {
      quest: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      aswer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      thene_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Themes",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
