const { Connection, PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY, Transaction } = require("@solana/web3.js");
const { getAmmConfigAddress, getPoolAddress, getPoolVaultAddress, } = require("../utils/pda")
const db = require("../models");
const config = require("../config/app.config");
const lang = require("../lang/lang");
const PoolInfo = db.poolinfo;
const PoolPrice = db.poolPrice;
const Op = db.Sequelize.Op;

// get pool list
const getPoolList = async () => {
  return await PoolInfo.findAll();
}
// get pool info
const getBalance = async (inputMint, outputMint) => {
  try {
    const connection = new Connection(config.rpcUrl, 'confirmed');
    const programId = new PublicKey(config.programId);

    const inputToken = new PublicKey(inputMint);
    const outputToken = new PublicKey(outputMint);

    let config_index = 8;

    const [address, _] = await getAmmConfigAddress(
      config_index,
      programId
    );
    const configAddress = address;

    const [poolAddress] = await getPoolAddress(
      configAddress,
      inputToken,
      outputToken,
      programId
    );

    const [inputVault] = await getPoolVaultAddress(
      poolAddress,
      inputToken,
      programId
    );
    const [outputVault] = await getPoolVaultAddress(
      poolAddress,
      outputToken,
      programId
    );

    let balance1 = await connection.getTokenAccountBalance(inputVault)
    let balance2 = await connection.getTokenAccountBalance(outputVault)
    // console.log(balance1.value.uiAmount)
    // console.log(balance2.value.uiAmount)

    await PoolPrice.create({
      inputMint: inputMint.toString(),
      outputMint: outputMint.toString(),
      timestamp: Math.floor(new Date().getTime() / 1000),
      rate: balance2.value.uiAmount / balance1.value.uiAmount,
      // volume: 
    });
  } catch (error) {
    console.log(error)
  }
}

// get pool pair price from contract
exports.getPoolPriceFromContract = async () => {
  setInterval(async () => {
    const poolList = await getPoolList();
    for (let poolInfo of poolList) {
      let inputMint = poolInfo.minta.split(",")[1];
      let outputMint = poolInfo.mintb.split(",")[1];
      try {
        getBalance(inputMint, outputMint)
      } catch (error) {
        console.log(error)
      }
    }
  }, 5000)
}
// get pool price
exports.getPoolPrice = async (req, res) => {
  try {
    let basemint = req.query.basemint;
    let quotemint = req.query.quotemint;
    const poolPrice = await PoolPrice.findAll({
      where: {
        inputMint: basemint,
        outputMint: quotemint,
      },
      order: [
        [['timestamp', 'ASC']],
      ],
    });
    res.json({
      poolPrice: poolPrice,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
