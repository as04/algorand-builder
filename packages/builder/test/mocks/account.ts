import { Account, mnemonicToSecretKey } from "algosdk";

export const mnemonic1 = "call boy rubber fashion arch day capable one sweet skate outside purse six early learn tuition eagle love breeze pizza loud today popular able divide";
const a1 = mnemonicToSecretKey(mnemonic1);

export const account1: Account = { addr: a1.addr, sk: a1.sk };
