const sha256 = require('crypto-js/sha256');

/* HASH */
//conteudo do hash
const transaction = {
    from: "a",
    to: "b",
    amount: "1btc"
};

//criando o hash sha256 e convertendo pra string
const hash = sha256(JSON.stringify(transaction)).toString();

console.log("hash com a trasação original: ", hash);

//alterando o a trasação original
transaction.from = "c";

console.log("hash com a trasação alterada: ",
    sha256(
        JSON.stringify(
            transaction)
    ).toString()
)
