const anchor = require("@coral-xyz/anchor");
const { PublicKey } = require("@solana/web3.js");

const AMM_CONFIG_SEED = Buffer.from(
  anchor.utils.bytes.utf8.encode("amm_config")
);
exports.AMM_CONFIG_SEED;

const POOL_SEED = Buffer.from(anchor.utils.bytes.utf8.encode("pool"));
exports.POOL_SEED

const POOL_VAULT_SEED = Buffer.from(
  anchor.utils.bytes.utf8.encode("pool_vault")
);
exports.POOL_VAULT_SEED

const POOL_AUTH_SEED = Buffer.from(
  anchor.utils.bytes.utf8.encode("vault_and_lp_mint_auth_seed")
);
exports.POOL_AUTH_SEED;

const POOL_LPMINT_SEED = Buffer.from(
  anchor.utils.bytes.utf8.encode("pool_lp_mint")
);
exports.POOL_LPMINT_SEED

const TICK_ARRAY_SEED = Buffer.from(
  anchor.utils.bytes.utf8.encode("tick_array")
);
exports.TICK_ARRAY_SEED;

const OPERATION_SEED = Buffer.from(
  anchor.utils.bytes.utf8.encode("operation")
);
exports.OPERATION_SEED;

ORACLE_SEED = Buffer.from(
  anchor.utils.bytes.utf8.encode("observation")
);
exports.ORACLE_SEED;

const u16ToBytes = (num) => {
  const arr = new ArrayBuffer(2);
  const view = new DataView(arr);
  view.setUint16(0, num, false);
  return new Uint8Array(arr);
}
exports.u16ToBytes;

exports.i16ToBytes = (num) => {
  const arr = new ArrayBuffer(2);
  const view = new DataView(arr);
  view.setInt16(0, num, false);
  return new Uint8Array(arr);
}

exports.u32ToBytes = (num) => {
  const arr = new ArrayBuffer(4);
  const view = new DataView(arr);
  view.setUint32(0, num, false);
  return new Uint8Array(arr);
}

exports.i32ToBytes = (num) => {
  const arr = new ArrayBuffer(4);
  const view = new DataView(arr);
  view.setInt32(0, num, false);
  return new Uint8Array(arr);
}

exports.getAmmConfigAddress = async (
  index,
  programId
) => {
  const [address, bump] = await PublicKey.findProgramAddress(
    [AMM_CONFIG_SEED, u16ToBytes(index)],
    programId
  );
  return [address, bump];
}

exports.getAuthAddress = async (
  programId
) => {
  const [address, bump] = await PublicKey.findProgramAddress(
    [POOL_AUTH_SEED],
    programId
  );
  return [address, bump];
}

exports.getPoolAddress = async (
  ammConfig,
  tokenMint0,
  tokenMint1,
  programId
) => {
  const [address, bump] = await PublicKey.findProgramAddress(
    [
      POOL_SEED,
      ammConfig.toBuffer(),
      tokenMint0.toBuffer(),
      tokenMint1.toBuffer(),
    ],
    programId
  );
  return [address, bump];
}

exports.getPoolVaultAddress = async (
  pool,
  vaultTokenMint,
  programId
) => {
  const [address, bump] = await PublicKey.findProgramAddress(
    [POOL_VAULT_SEED, pool.toBuffer(), vaultTokenMint.toBuffer()],
    programId
  );
  return [address, bump];
}

exports.getPoolLpMintAddress = async (
  pool,
  programId
) => {
  const [address, bump] = await PublicKey.findProgramAddress(
    [POOL_LPMINT_SEED, pool.toBuffer()],
    programId
  );
  return [address, bump];
}

exports.getOrcleAccountAddress = async (
  pool,
  programId
) => {
  const [address, bump] = await PublicKey.findProgramAddress(
    [ORACLE_SEED, pool.toBuffer()],
    programId
  );
  return [address, bump];
}
