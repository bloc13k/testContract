const path = require('path');
const fs = require('fs');
const solc = require('solc');
//const IPFS = require('ipfs')
 
const CONTRACT_FILE = path.resolve(__dirname, 'contracts', 'Inbox.sol');
//const source = fs.readFileSync(inboxPath, 'utf8');


const content = fs.readFileSync(CONTRACT_FILE, 'utf-8').toString()

const input = {
  'language': 'Solidity',
  'sources' : {
    [CONTRACT_FILE]: {
        "urls":
        [
          "ipfs://QmSBPHf83w633mHmfAQBe8hfpzUdh3sMtrBkVuE7ULRybJ",
        ]
    }
  },
  'settings' : {
    'outputSelection' : {
      '*': {
        '*': ['*']
      }
    }
  }
}

var string1 = JSON.stringify(input);

var parsed = JSON.parse(string1);  

const output = solc.compile(parsed)

console.log(output.contracts)

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'];

