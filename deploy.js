const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
 
const compiled = require('./bin/contracts/Inbox.json');
//"ipfs://QmSBPHf83w633mHmfAQBe8hfpzUdh3sMtrBkVuE7ULRybJ"

provider = new HDWalletProvider(
  'pony message evoke fruit fiscal mistake response mosquito photo supreme relief walk',
  'https://rinkeby.infura.io/v3/e777ba875f9742aa930b2092beac470d'
);
 
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy from account', accounts[0]);
 
  const result = await new web3.eth.Contract(compiled.abi)
    .deploy({ data: compiled.bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
 
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
 
deploy();