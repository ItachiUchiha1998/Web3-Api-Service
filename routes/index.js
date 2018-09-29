const express = require('express');
const router = express.Router();
const Web3 = require('web3'); 
const mongoose = require('mongoose');
const db = require('../model/db');
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

router.use(cors());

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const LendBytecode = require('../../Hydro_Block/build/contracts/Buyer.json')
const Buyer = LendBytecode.bytecode;
const LenderABI = LendBytecode.abi;

var fromAccount = web3.eth.accounts[0];

web3.eth.getAccounts().then(accounts => {
      
      fromAccount = accounts[0];
      console.log("success")
   
})


const Lend_contract_address = JSON.stringify(LendBytecode.networks).slice(43,85)

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

router.post('/test' , (req,res) => {
  console.log(Lend_contract_address)
  res.send({success: true})
})

router.post('/signUp',(req,res) => { // username , walletaddress , meterId , email

  web3.eth.getAccounts().then(accounts => {
      
      console.log(accounts);

      db.User_Details.countDocuments({}).then(function(count){
        console.log(count)
        db.User_Details.create({
          username: req.body.username,
          email: req.body.email,
          meterId: req.body.meterId,
          walletAddress: accounts[count+1]
        }).then(function(data){
          res.send({walletAddress:data.walletAddress , success: true})
        }).catch(function(err){ 
             res.send({success: false})
        })
            
      })
   
   })

})

router.post('/sell',(req,res) => {
  // wallet , price , quantity

  LendContract.methods.createSeller(req.body.supply,req.body.value)
    .send({from: req.body.wallet,gasPrice: '20000000000',gas: 1500000,})
      .then(function(receipt){
          console.log(receipt);
          res.send({success: true})
      }).catch(function(err) {
        console.error(err)
        res.send({success: false})
      });

})

router.post('/createBuyer',(req,res) => {

  LendContract.methods.createBuyer(req.body.demand)
    .send({from: fromAccount,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          console.log(receipt);
          res.send({success: true})
      }).catch(function(err) {
        res.send({success: false})
      });

})

router.post('/Buy',(req,res) => {

    // LendContract.methods.seeLoanRequest(req.body.borrowerId).call({from: fromAccount})
    // .then(function(receipt){
    //   res.send({success: true})
    //    console.log(receipt);
    // }).catch(function(err){
    //   console.log(err)
       res.send({success: false})
    // });

})

router.post('/setLoanTerms',(req,res) => {
  // LendContract.methods.setLoanTerms(req.body.borrowerId,req.body.value,req.body.time,req.body.interest)
  //   .send({from: fromAccount,gasPrice: '20000000000',gas: 1500000})
  //     .then(function(receipt){
  //         console.log(receipt);
  //         res.send({success: true})
  //     }).catch(function(err) {
         res.send({success: false})
  //     });
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

  // LendContract.methods.getLender(req.body.id).call({from: fromAccount})
  //   .then(function(receipt){
  //     res.send({success: true})
  //      console.log(receipt);
  //   }).catch(function(err){
  //     console.log(err)
       res.send({success: false})
  //   });

});

router.post('/getBorrower',(req,res) => {

  // LendContract.methods.getBorrower(req.body.id).call({from: fromAccount})
  //   .then(function(receipt){
  //     res.send({success: true})
  //      console.log(receipt);
  //   }).catch(function(err){
  //     console.log(err)
  //     res.send({success: false})
  //   });

});


router.post('/createBorrower',(req,res) => {

  // LendContract.methods.createBorrower(req.body.name,req.body.startupname,req.body.startupidea,req.body.linkedInURL)
  //   .send({from: fromAccount,gasPrice: '20000000000',gas: 1500000})
  //     .then(function(receipt){
  //         console.log(receipt);
  //         res.send({success: true})
  //     }).catch(function(err) {
         res.send({success: false})
  //     });
  
});

router.post('/createLender',(req,res) => {

  // LendContract.methods.createLender(req.body.name,fromAccount,req.body.linkedInURL)
  //   .send({from: fromAccount,gasPrice: '20000000000',gas: 1500000})
  //     .then(function(receipt){
  //         console.log(receipt);
  //         res.send({success: true})
  //     }).catch(function(err) {
  //       console.log(err)
         res.send({success: false})
  //     });
  
});


router.post('/events',(req,res) => {

  //LendContract.once('BorrowerFormed', {
  //}, function(error, event){ 
  //  console.log(event); 
    res.send({success: true})
  //});

})

router.post('/getAddress' , (req,res) => {
  
  // LendContract.deploy({})
  //   .send({
  //       from: fromAccount,
  //       gas: 1500000,
  //       gasPrice: '20000000000'
  //   })
  //   .then(function(newContractInstance){
  //       console.log(newContractInstance.options.address) // instance with the new contract address
         res.send({success: true})
  //   });

});

router.post('/checkGas', (req, res) => {

  // LendContract.deploy({
  //     arguments: [123, 'My String']
  // })
  // .estimateGas(function(err, gas){
  //     console.log(gas);
       res.send({success: true})
  // });

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
