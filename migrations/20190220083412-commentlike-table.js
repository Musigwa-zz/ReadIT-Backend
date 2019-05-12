
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("commentlikes", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      commentId: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: { model: "comments", key: "id", as: "commentId" }
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "users", key: "id" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("commentlikes");
  }
};
