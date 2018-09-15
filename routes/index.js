const express = require('express');
const router = express.Router();
const Web3 = require('web3'); 
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// var Accounts = require('web3-eth-accounts');
// var accounts = new Accounts('ws://localhost:7546');

const LenderABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "LoanRequest",
      "outputs": [
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "Lender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_period",
          "type": "uint256"
        },
        {
          "name": "_Rinterest",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "createLoanRequest",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "borrowers",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "StartUpName",
          "type": "string"
        },
        {
          "name": "StartUpIdea",
          "type": "string"
        },
        {
          "name": "LinkedInUrl",
          "type": "string"
        },
        {
          "name": "BorroweAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getBorrower",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "lenders",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "lenderId",
          "type": "address"
        },
        {
          "name": "linkedInURL",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_StartUpName",
          "type": "string"
        },
        {
          "name": "_StartUpIdea",
          "type": "string"
        },
        {
          "name": "_LinkedInUrl",
          "type": "string"
        }
      ],
      "name": "createBorrower",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "LenderCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "BorrowerFormed",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_sender",
          "type": "address"
        },
        {
          "name": "_linkedInURL",
          "type": "string"
        }
      ],
      "name": "createLender",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getLender",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "seeLoanRequest",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "period",
          "type": "uint256"
        },
        {
          "name": "Rinterest",
          "type": "uint256"
        }
      ],
      "name": "setLoanTerms",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

const LendBytecode = '0x608060405234801561001057600080fd5b50611b3d806100206000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806311569aca146100a957806355fe70a21461015e578063706f24a5146101c15780637529e522146102065780637924d93f146102735780638500d91914610490578063929eea21146106ad5780639d72fbce146107f2578063a5e77fdd146108d9578063fa2c7f9b14610a2c575b600080fd5b3480156100b557600080fd5b506100d460048036038101908080359060200190929190505050610b71565b604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381526020018281526020019550505050505060405180910390f35b34801561016a57600080fd5b506101a760048036038101908080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610be7565b604051808215151515815260200191505060405180910390f35b3480156101cd57600080fd5b506101ec60048036038101908080359060200190929190505050610c97565b604051808215151515815260200191505060405180910390f35b34801561021257600080fd5b5061023160048036038101908080359060200190929190505050610dbb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027f57600080fd5b5061029e60048036038101908080359060200190929190505050610dfa565b60405180806020018060200180602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200185810385528a818151815260200191508051906020019080838360005b8381101561031c578082015181840152602081019050610301565b50505050905090810190601f1680156103495780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b83811015610382578082015181840152602081019050610367565b50505050905090810190601f1680156103af5780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b838110156103e85780820151818401526020810190506103cd565b50505050905090810190601f1680156104155780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b8381101561044e578082015181840152602081019050610433565b50505050905090810190601f16801561047b5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b34801561049c57600080fd5b506104bb600480360381019080803590602001909291905050506110bf565b60405180806020018060200180602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200185810385528a818151815260200191508051906020019080838360005b8381101561053957808201518184015260208101905061051e565b50505050905090810190601f1680156105665780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b8381101561059f578082015181840152602081019050610584565b50505050905090810190601f1680156105cc5780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b838110156106055780820151818401526020810190506105ea565b50505050905090810190601f1680156106325780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b8381101561066b578082015181840152602081019050610650565b50505050905090810190601f1680156106985780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b3480156106b957600080fd5b506106d86004803603810190808035906020019092919050505061140b565b60405180806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838103835286818151815260200191508051906020019080838360005b8381101561074e578082015181840152602081019050610733565b50505050905090810190601f16801561077b5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156107b4578082015181840152602081019050610799565b50505050905090810190601f1680156107e15780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b3480156107fe57600080fd5b506108bf600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611594565b604051808215151515815260200191505060405180910390f35b3480156108e557600080fd5b50610a12600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506116c1565b604051808215151515815260200191505060405180910390f35b348015610a3857600080fd5b50610a57600480360381019080803590602001909291905050506118a1565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610acd578082015181840152602081019050610ab2565b50505050905090810190601f168015610afa5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610b33578082015181840152602081019050610b18565b50505050905090810190601f168015610b605780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b60006020528060005260406000206000915090508060000160009054906101000'
const Lend_contract_address = '0x46cb7de8a10e80676421b9b10bb9c7e50019402a'
const fromAccount = '0x379bc2506d8619e9adb1bec113669de8e5def633'

const LendContract = new web3.eth.Contract(
    LenderABI, 
    Lend_contract_address, {
      from: fromAccount,
      gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
      gas: 1891234
  });

LendContract.options.data = LendBytecode;

router.post('/',(req,res) => {
  res.send({success: true})
});

router.post('/createLoan',(req,res) => {

  LendContract.methods.createLoanRequest(req.body.borrowerId)
    .send({from: fromAccount,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          console.log(receipt);
          res.send({success: true})
      }).catch(function(err) {
        res.send({success: false})
      });

})

router.post('/seeLoan',(req,res) => {

    LendContract.methods.seeLoanRequest(req.body.borrowerId).call({from: fromAccount})
    .then(function(receipt){
      res.send({success: true})
       console.log(receipt);
    }).catch(function(err){
      console.log(err)
      res.send({success: false})
    });

})

router.post('/setLoanTerms',(req,res) => {
  LendContract.methods.setLoanTerms(req.body.borrowerId,req.body.value,req.body.time,req.body.interest)
    .send({from: fromAccount,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          console.log(receipt);
          res.send({success: true})
      }).catch(function(err) {
        res.send({success: false})
      });
})

router.post('/createAccount' , (req,res) => {
  
  // web3.eth.accounts.create().then(function(data){
  //  console.log(data);
  //  res.send({success: true}) 
  // });

  //web3.eth.accounts.privateKeyToAccount('2ed1974a7707dd9951e5986f0c3c2bcc6399f6a9da59498a5839f4974bfe07f7')
  // .then(function(data){
  //  console.log(data);
  //  web3.eth.accounts.signTransaction(tx, privateKey [, callback]);
  //  res.send({success: true})
  // })

  res.send({success: true})
  
})

router.post('/getLender',(req,res) => {

  LendContract.methods.getLender(req.body.id).call({from: fromAccount})
    .then(function(receipt){
      res.send({success: true})
       console.log(receipt);
    }).catch(function(err){
      console.log(err)
      res.send({success: false})
    });

});

router.post('/getBorrower',(req,res) => {

  LendContract.methods.getBorrower(req.body.id).call({from: fromAccount})
    .then(function(receipt){
      res.send({success: true})
       console.log(receipt);
    }).catch(function(err){
      console.log(err)
      res.send({success: false})
    });

});


router.post('/createBorrower',(req,res) => {

  LendContract.methods.createBorrower(req.body.name,req.body.startupname,req.body.startupidea,req.body.linkedInURL)
    .send({from: fromAccount,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          console.log(receipt);
          res.send({success: true})
      }).catch(function(err) {
        res.send({success: false})
      });
  
});

router.post('/createLender',(req,res) => {

  LendContract.methods.createLender(req.body.name,fromAccount,req.body.linkedInURL)
    .send({from: fromAccount,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          console.log(receipt);
          res.send({success: true})
      }).catch(function(err) {
        console.log(err)
        res.send({success: false})
      });
  
});


router.post('/events',(req,res) => {

  //LendContract.once('BorrowerFormed', {
  //}, function(error, event){ 
  //  console.log(event); 
    res.send({success: true})
  //});

})

router.post('/getAddress' , (req,res) => {
  
  LendContract.deploy({})
    .send({
        from: fromAccount,
        gas: 1500000,
        gasPrice: '20000000000'
    })
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
        res.send({success: true})
    });

});

router.post('/checkGas', (req, res) => {

  LendContract.deploy({
      arguments: [123, 'My String']
  })
  .estimateGas(function(err, gas){
      console.log(gas);
      res.send({success: true})
  });

});

router.post('*',(req,res) => {
  res.status(403).send({success: false,message: 'Does not exist'})
});

router.delete('*',(req,res) => {
  res.status(403).send({success: false,message: 'Does not exist'})
});

router.put('*',(req,res) => {
  res.status(403).send({success: false,message: 'Does not exist'})
});

router.get('*',(req,res) => {
  res.status(403).send({success: false,message: 'Does not exist'})
});

module.exports = router;

// web3.eth.sendTransaction({from: '0x4402D175A3B8510400F88394D8423381d98D701C', data: '0xb9695e0DfcccfF1502eb6252FB45Fc7De92220af'})
  //  .once('transactionHash', function(hash){ console.log(hash) })
  //  .once('receipt', function(receipt){ console.log(receipt) })
  //  .on('confirmation', function(confNumber, receipt){ console.log(receipt) })
  //  .on('error', function(error){ console.log(error) })
  //  .then(function(receipt){
  //      console.log(receipt)
  // });

  //  console.log("Contract: " + JSON.stringify(LendContract.options.address)  /* + JSON.stringify(LendContract.options.jsonInterface)
  //         JSON.stringify(LendContract.options.from) */ )

    // LendContract.methods.getOrgan(0).call({from: '0xb9695e0DfcccfF1502eb6252FB45Fc7De92220af'})
    // .then(function(receipt){
    //  res.send({success: true})
    //   console.log(receipt);
    // }).catch(function(err){
    //  console.log(err)
    //  res.send({success: false})
    // });

    
// web3.eth.getAccounts().then(accounts => {
//   allAccounts = accounts;
//   Voting.deploy({data: bytecode}).send({
//     from: accounts[0],
//     gas: 1500000,
//     gasPrice: '30000000000000'
//   }).on('receipt', receipt => {
//     Voting.options.address = receipt.contractAddress;
//     Voting.methods.transfer(accounts[1], 10).send({from: accounts[0]}).then(transaction => {
//       console.log("Transfer lodged. Transaction ID: " + transaction.transactionHash);
//       let blockHash = transaction.blockHash
//       return web3.eth.getBlock(blockHash, true);
//     }).then(block => {
//       block.transactions.forEach(transaction => {
//         console.log(abiDecoder.decodeMethod(transaction.input));
//       });
//       allAccounts.forEach(account => {
//           Voting.methods.balances(account).call({from: allAccounts[0]}).then(amount => {
//             console.log(account + ": " + amount);
//           });
//       });
//     });
//   });
// });