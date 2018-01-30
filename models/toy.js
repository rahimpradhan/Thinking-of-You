module.exports = (sequelize, DataTypes) => {
    const toy = sequelize.define("toy", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        message: DataTypes.STRING,
        // createdAt: {
        //     type: 'TIMESTAMP'
        // }
    });
    return toy;
};