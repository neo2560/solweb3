const Web3 = require('web3')
//const web3 = new Web3("http://127.0.0.1:9545/");
const web3 = new Web3("ws://127.0.0.1:9545/");
//web3.setProvider('ws://localhost:8546');
//var Purchase = artifacts.require("./Purchase.sol");
const mycontract = require('./Purchase.json')




var conaddress = "0x834e601D2971580C0D251C857Bd2EBc9C60Ed996";
var fromaddr = "0x75Cb1ebc1bFAFcDfE5C3C7DbF8cBB120dfA5ed72";

var contractinstance = new web3.eth.Contract(mycontract.abi, 
   conaddress,
    {
    from: fromaddr , // default from address
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

//contractinstance.events.Registered({}, function(x, y){
contractinstance.events.allEvents({}, function(x, y){
   console.log("got="+x);
   console.log("got="+y);
})
.on('data', function(event) {
   console.log("got="+event);
})
.on('changed', function(event) {
   console.log("got="+event);
})
.on('error', function(event) {
   console.log("got="+event);
});

contractinstance.methods.register("ramesh").call({from: fromaddr }).then(function(x) {

   console.log(x);

});



