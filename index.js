const fs = require('fs')

const Blockchain = require('./Blockchain');
const blockchain = new Blockchain();
blockchain.addBlock({ from: 'a', to: 'b', amount: '1btc' });
blockchain.addBlock({ from: 'c', to: 'd', amount: '0.5btc' });
blockchain.addBlock({ from: 'c', to: 'a', amount: '0.5btc' });
blockchain.addBlock({ from: 'c', to: 'f', amount: '0.5btc' });

console.log(blockchain);
console.log(blockchain.isValid());

// fs.writeFile(`./${Date.now()}.json`, JSON.stringify(blockchain), function (err) {
//     if (err) throw err;
//     console.log()
// });

// blockchain.blocks[1].data = JSON.stringify  ({ from: 'a', to: 'b', amount: '2btc' });
// console.log(blockchain);
// console.log(blockchain.isValid());