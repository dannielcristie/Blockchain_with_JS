const sha256 = require('crypto-js/sha256');

module.exports = class Block {

    constructor(index = 0, previousHash = null, data = 'Genesis Block') {
        this.index = index; // index do bloco
        this.data = data; // informações do bloco, se houver, senão sera o bloco genesis
        this.timestamp = new Date(); // exato tempo que o bloco foi criado
        this.previousHash = previousHash; //hash anterior da cadeia, se houver

        this.hash = this.generateHash(); //gerando o hash de toda informação do bloco
    };

    //gerando o hash com Crypto-js
    generateHash() {
        return sha256(
            this.index +
            this.previousHash +
            JSON.stringify(this.data) +
            this.timestamp
        ).toString();
    };
};