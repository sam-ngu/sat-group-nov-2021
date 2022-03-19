const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/connect");
const User = require("./User");

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                key: "id",
                model: User,
            },
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                key: "id",
                model: User,
            },
        },


    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);

module.exports = Comment;
