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
    amountA:{
      type: Sequelize.STRING,
    },
    amountB:{
      type: Sequelize.STRING,
    },
    lpAmount: {
      type: Sequelize.STRING,
    },
    lpPrice: {
      type: Sequelize.STRING,
    },
    lpMint: {
      type: Sequelize.STRING,
    },
    farmOngoingCount: {
      type: Sequelize.STRING,
    },
    programId: {
      type: Sequelize.STRING,
    }
  });

  return poolinfo;
};
