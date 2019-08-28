const Web3 = require('web3')
const web3 = new Web3("http://127.0.0.1:9545/");
//var Purchase = artifacts.require("./Purchase.sol");
const mycontract = require('./Purchase.json')




var conaddress = "0x24057804cc0825Cd18Be422A7280D8796bB9A735";

var contractinstance = new web3.eth.Contract(mycontract.abi, 
   conaddress,
    {
    from: '0x75cb1ebc1bfafcdfe5c3c7dbf8cbb120dfa5ed72', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });
//var contractinstance = new web3.eth.Contract(mycontract.abi).at(conaddress);

/*
var purchaser = contractinstance.methods.buy();

console.log(purchaser);

contractinstance.methods.buy().call({from: '0x75cb1ebc1bfafcdfe5c3c7dbf8cbb120dfa5ed72'}, function(err,x) {
console.log("err="+ err);
console.log(x);
});



contractinstance.methods.buy().call({from: '0x561c8cacee4b86629b6f07672468721b65377400'}).then(function(x) {

   console.log(x);

});

*/
contractinstance.methods.register("ramesh").call({from: '0x561c8cacee4b86629b6f07672468721b65377400'}).then(function(x) {

   console.log(x);

});



