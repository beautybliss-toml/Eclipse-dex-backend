const db = require("../models");
const config = require("../config/app.config")
const lang = require('../lang/lang')
const Group = db.group;
const Op = db.Sequelize.Op;

exports.getPoolInfo = async (req, res) => {
    try {
        const group = await Group.create({});
        group !== null ? res.json({ message: lang("created") }) : res.json({ message: lang("failed") })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
