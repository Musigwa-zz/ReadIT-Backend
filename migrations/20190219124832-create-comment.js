module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "users", key: "id" }
      },
      articleId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "articles", key: "id" }
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
    return queryInterface.dropTable("comments");
  }
};
