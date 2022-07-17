const Blockchain = require('./Blockchain');
const blockchain = new Blockchain();
blockchain.addBlock({ from: 'a', to: 'b', amount: '1btc' });
blockchain.addBlock({ from: 'c', to: 'd', amount: '0.5btc' });
blockchain.addBlock({ from: 'e', to: 'f', amount: '0.00025btc' });
blockchain.addBlock({ from: 'a', to: 'f', amount: '0.00025btc' });
blockchain.addBlock({ from: 'b', to: 'f', amount: '0.00025btc' });

console.log(blockchain);

