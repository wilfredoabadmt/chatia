import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("MessageTemplates", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      language: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "PENDING"
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      components: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      header: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      buttons: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      metaTemplateId: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Companies",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("MessageTemplates");
  }
};
