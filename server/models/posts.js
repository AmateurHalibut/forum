module.exports = (sequelize, DataTypes) => {

    const posts = sequelize.define("posts", {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        thread_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return posts;
};