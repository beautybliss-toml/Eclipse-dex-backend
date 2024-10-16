const db = require("../models");
const config = require("../config/app.config");
const lang = require("../lang/lang");
const PoolInfo = db.poolinfo;
const Op = db.Sequelize.Op;

exports.getPoolInfo = async (req, res) => {
  try {
    const poolInfo = await PoolInfo.findAll();
    res.json({
      poolInfo: poolInfo,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.savePoolInfo = async (req, res) => {
  try {
    const poolId = req.body.id;
    const mintA = req.body.mintA;
    const mintB = req.body.mintB;

    await PoolInfo.create({
      poolId: poolId,
      minta: mintA,
      mintb: mintB,
      liq: "1282",
      vol: "0",
      fee: "0",
      apr: "0",
      amountA: "0",
      amountB: "0",
      lpAmount: "0",
      lpPrice: "0",
      lpMint: "0",
      farmOngoingCount: "0",
      programId: "0",
    });

    res.json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOnePoolInfo = async (req, res) => {
    try {

        const poolId = req.query.id;

        let poolInfo = await PoolInfo.findAll({
            where: {
            poolId: poolId,
            }
        })
 
      res.json({ poolInfo: poolInfo });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  