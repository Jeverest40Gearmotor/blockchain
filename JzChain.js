const { Block, Blockchain, Transaction } = require("./jechain.js");
const EC = require("elliptic").ec, ec = new EC("secp256k1");

const JzChain = new Blockchain();
// Your original balance is 100000

const girlfriendWallet = ec.genKeyPair();
const holderKeyPair = ec.genKeyPair();

// Create a transaction
const transaction = new Transaction(holderKeyPair.getPublic("hex"), girlfriendWallet.getPublic("hex"), 100, 10);
// Sign the transaction
transaction.sign(holderKeyPair);
// Add transaction to pool
JzChain.addTransaction(transaction);
// Mine transaction
JzChain.mineTransactions(holderKeyPair.getPublic("hex"));

// Prints out balance of both address
console.log("Your balance:", JzChain.getBalance(holderKeyPair.getPublic("hex")));
console.log("Your girlfriend's balance:", JzChain.getBalance(girlfriendWallet.getPublic("hex")));
// Prints out the updated chain
//console.log(JzChain.chain);