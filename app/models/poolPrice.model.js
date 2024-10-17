module.exports = (sequelize, Sequelize) => {
  const poolPrice = sequelize.define("poolPrice", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, // primary key
    poolInfoId: {
      type: Sequelize.INTEGER,
    }, //  secondary key
    timestamp: {
      type: Sequelize.INTEGER
    },
    rate: {
      type: Sequelize.DOUBLE
    },
    volume: {
      type: Sequelize.DOUBLE
    }
  });

  return poolPrice;
};
