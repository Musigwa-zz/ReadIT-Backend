module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define(
    "CommentLike",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      commentId: DataTypes.UUID,
      userId: DataTypes.UUID
    },
    {
      tableName: "commentlikes"
    }
  );

  CommentLike.associate = models => {
    CommentLike.belongsTo(models.Comment, {
      foreignKey: "commentId",
      onDelete: "CASCADE",
      as: "likesCount",
      hooks: true
    });
  };
  return CommentLike;
};
