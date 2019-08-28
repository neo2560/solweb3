const Web3 = require('web3')
const web3 = new Web3("http://127.0.0.1:9545/");

//const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.etherscan.io/address/0xf4021f7966efd15f3244fcc75ba849dc4a337e14/ws"));


var address = "0xF4021f7966EfD15f3244fcC75ba849DC4a337E14";


web3.eth.getAccounts().then(function(accounts) {
  console.log("accounts="+ accounts);

},  (err) => {
  
  console.log("err=" + err);
});


