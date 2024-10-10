const db = require("../models");
const config = require("../config/app.config")
const lang = require('../lang/lang')
const PoolInfo = db.poolinfo;
const Op = db.Sequelize.Op;

exports.getPoolInfo = async (req, res) => {
    try {
        const poolInfo = await PoolInfo.findAll();
        res.json({
            poolInfo: poolInfo
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.savePoolInfo = async (req, res) => {
    try {
        const poolId = req.body.id;
        const mintA = req.body.mintA;
        const mintB = req.body.mintB;

        await PoolInfo.create({ id: poolId, minta: mintA, mintb: mintB });

        res.json({ message: "success" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
