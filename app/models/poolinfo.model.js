module.exports = (sequelize, Sequelize) => {
  const poolinfo = sequelize.define("poolinfo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    poolId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    minta: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mintb: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    liq: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    vol: {
      type: Sequelize.STRING,
    },
    fee: {
      type: Sequelize.STRING,
    },
    apr: {
      type: Sequelize.STRING,
    },
  });

  return poolinfo;
};
