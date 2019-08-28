const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/4b9558998bac4105968cb8ea6b836b9b"));

//const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.etherscan.io/address/0xf4021f7966efd15f3244fcc75ba849dc4a337e14/ws"));


var address = "0xF4021f7966EfD15f3244fcC75ba849DC4a337E14";
web3.eth.getBalance(address, (err, wei) => {
  console.log("err=" + err);
  console.log("balance="+ wei);
  
})

web3.eth.getBalance(address).then(function(wei) {
  console.log("balance="+ wei);

},  (err) => {
  
  console.log("err=" + err);
});


