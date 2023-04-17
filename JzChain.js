const { Block, Blockchain } = require("./Blockchain.js");

const JzChain = new Blockchain();
// Add a new block
JzChain.addBlock(new Block(Date.now().toString(), { from: "John", to: "Bob", amount: 100 }));
// (This is just a fun example, real cryptocurrencies often have some more steps to implement).

// Prints out the updated chain
console.log(JzChain.chain); 