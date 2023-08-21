module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
      },
    },
    {
        underscored: true, // usder score aauxa
        timestamps: true,  // created_at, updated_at
        paranoid: true, // deleted_at
    }
  );

  return Customer;
};
