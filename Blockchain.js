const Block = require('./Block');

module.exports = class Blockchain {

    constructor() {
        this.blocks = [new Block()] //array com os blocos added
        this.nextIndex = 1 // index do proximo block
    };

    // retorna o hash do ultimo bloco
    getLasthash() {
        return this.blocks[this.blocks.length - 1].hash;
    };

    addBlock(data) {
        const lastHash = this.getLasthash();
        const block = new Block(
            this.nextIndex,
            lastHash,
            data = JSON.stringify(data)
        );
        this.blocks.push(block);
        this.nextIndex++;
    };
};