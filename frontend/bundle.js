var contractABI = [];
var contractAddress = '0x6AB75180D1D6C80eB02348ab4C46f159cb117c57';

//Web3 library definition itself
//If this was on mainet, it would url that points to our ethereum node
var web3 = new Web3('http://localhost:9545');
//This will build our contract object
var simpCon = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpCon);

web3.eth.getAccounts()
.then(console.log);