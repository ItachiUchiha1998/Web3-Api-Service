const express = require('express');
const router = express.Router();
const Web3 = require('web3'); 
const mongoose = require('mongoose');
const db = require('../model/db');
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.urlencoded({ extended: true }))

router.use(cors());

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const LendBytecode = require('PATH_OF_ABI_OF_CONTRACT')
const Buyer = LendBytecode.bytecode;
const LenderABI = LendBytecode.abi;

var fromAccount = web3.eth.accounts[0];

web3.eth.getAccounts().then(accounts => {
      
      fromAccount = accounts[0];
      console.log("success")
   
})

const Lend_contract_address = "YOUR_CONTRACT_ADDRESS"

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

router.post('/signup',(req,res) => { // username , walletaddress , meterId , email

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

  LendContract.methods.createSeller(req.body.supply,req.body.supply*2*10)
    .send({from: req.body.wallet,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          console.log(receipt);
          res.send({success: true})
      }).catch(function(err) {
        console.error(err)
        res.status(403).send({success: false})
      });

})

router.post('/buy',(req,res) => {    

  LendContract.methods.createBuyer()
    .send({from: req.body.wallet,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          
          console.log(receipt);
          
          db.User_Details.findOne({walletAddress: req.body.wallet }).then(function(data){
            if(!data) {
              return res.status(403).send({success: false})
            }
            else {
              data.update({
                resident_address: req.body.resident_address
              }).then(function(data){
                console.log(data)
                res.send({success: true})
              })
            }
          }).catch(function(err){
            res.status(403).send({success: false})
          })
          
      }).catch(function(err) {
        res.send({success: false})
      });

})

router.post('/seller/count',(req,res) => { 

  LendContract.methods.get_seller_count().call({from: fromAccount})
    .then(function(receipt){
       
       res.send({success: true,count: receipt})     
        
       
    }).catch(function(err){
      console.log(err)
       res.send({success: false})
    });

})

router.post('/seller/read/:id',(req,res) => {

  LendContract.methods.see_single_seller(req.params.id).call({from: fromAccount})
          .then(function(v){
            a = {
              seller: v[0],
              supply: v[1]
            }
            console.log(a)
            
            db.User_Details.findOne({walletAddress: a.seller}).then(function(data){
              if(!data) {
                res.send({success: false,message: "Wallet Address Does not exists"})
              }
              else
              {res.send({walletAddress: data.walletAddress , supply: a.supply ,username:  data.username})}
            })
    })
})

router.post('/buyer/count',(req,res) => {

  LendContract.methods.get_buyer_count().call({from: fromAccount})
    .then(function(receipt){
       
       res.send({success: true,count: receipt})     
        
       
    }).catch(function(err){
      console.log(err)
       res.send({success: false})
    });

})

router.post('/buyer/read/:id',(req,res) => {

  LendContract.methods.see_single_buyer(req.params.id).call({from: fromAccount})
          .then(function(v){
            a = {
              Buyer: v[0],
              water: v[1]
            }
            console.log(a)
            
            db.User_Details.findOne({walletAddress: a.Buyer}).then(function(data){
              if(!data) {
                res.send({success: false,message: "Wallet Address Does not exists"})
              } else{ 
                            res.send({walletAddress: data.walletAddress , supply: a.water 
                                      ,username:  data.username, resident_address: data.resident_address})}
            })

    })
})

router.post('/getBalance',(req,res) => {

     LendContract.methods.get_balance().call({from: req.body.wallet})
     .then(function(receipt){
        console.log(receipt);
        receipt /= 1000000000000000000
       res.send({success: true,balance: receipt})
     }).catch(function(err){
       console.log(err)
       res.send({success: false})
     });  

})

router.post('/buyer/read',(req,res) => {
  db.User_Details.findOne({walletAddress: req.body.wallet}).then(function(data){
    res.send({success: true,buyer: data})
  })
})

router.post('/buyFrom',(req,res) => { // to edit later
  
  LendContract.methods.buyFrom(req.body.sellerAddress,req.body.value)
    .send({from: req.body.wallet,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          console.log(receipt);

          db.User_Details.findOne({walletAddress: req.body.wallet }).then(function(data){
            if(!data) {
              return res.status(403).send({success: false})
            }
            else {
              data.update({
                resident_address: req.body.resident_address
              }).then(function(data){
                console.log(data)
                res.send({success: true})
              })
            }
          }).catch(function(err){
            res.status(403).send({success: false})
          })

      }).catch(function(err) {
        res.send({success: false})
      });

})

router.post('/confirm',(req,res) => { // to do later
  
  LendContract.methods.confirm_received(req.body.sellerId)
    .send({from: req.body.wallet,gasPrice: '20000000000',gas: 1500000})
      .then(function(receipt){
          console.log(receipt);
          res.send({success: true})
      }).catch(function(err) {
        console.error(err)
        res.send({success: false})
      });

})


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
