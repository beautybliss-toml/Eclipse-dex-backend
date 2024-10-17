module.exports = (sequelize, Sequelize) => {
  const poolPrice = sequelize.define("poolPrice", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, // primary key
    inputMint: {
      type: Sequelize.STRING,
    },
    outputMint: {
      type: Sequelize.STRING,
    },
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
