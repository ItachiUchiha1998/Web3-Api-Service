Eth {
  currentProvider: [Getter/Setter],
  _requestManager:
   RequestManager {
     provider:
      HttpProvider {
        host: 'http://localhost:8545',
        httpAgent: [Agent],
        timeout: 0,
        headers: undefined,
        connected: false },
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     subscriptions: {} },
  givenProvider: null,
  providers:
   { WebsocketProvider: [Function: WebsocketProvider],
     HttpProvider: [Function: HttpProvider],
     IpcProvider: [Function: IpcProvider] },
  _provider:
   HttpProvider {
     host: 'http://localhost:8545',
     httpAgent:
      Agent {
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        defaultPort: 80,
        protocol: 'http:',
        options: [Object],
        requests: {},
        sockets: {},
        freeSockets: {},
        keepAliveMsecs: 1000,
        keepAlive: true,
        maxSockets: Infinity,
        maxFreeSockets: 256 },
     timeout: 0,
     headers: undefined,
     connected: false },
  setProvider: [Function],
  BatchRequest: [Function: bound Batch],
  extend:
   { [Function: ex]
     formatters:
      { inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
        inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
        inputCallFormatter: [Function: inputCallFormatter],
        inputTransactionFormatter: [Function: inputTransactionFormatter],
        inputAddressFormatter: [Function: inputAddressFormatter],
        inputPostFormatter: [Function: inputPostFormatter],
        inputLogFormatter: [Function: inputLogFormatter],
        inputSignFormatter: [Function: inputSignFormatter],
        outputBigNumberFormatter: [Function: outputBigNumberFormatter],
        outputTransactionFormatter: [Function: outputTransactionFormatter],
        outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
        outputBlockFormatter: [Function: outputBlockFormatter],
        outputLogFormatter: [Function: outputLogFormatter],
        outputPostFormatter: [Function: outputPostFormatter],
        outputSyncingFormatter: [Function: outputSyncingFormatter] },
     utils:
      { _fireError: [Function: _fireError],
        _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
        _flattenTypes: [Function: _flattenTypes],
        randomHex: [Function: randomHex],
        _: [Function],
        BN: [Function],
        isBN: [Function: isBN],
        isBigNumber: [Function: isBigNumber],
        isHex: [Function: isHex],
        isHexStrict: [Function: isHexStrict],
        sha3: [Function],
        keccak256: [Function],
        soliditySha3: [Function: soliditySha3],
        isAddress: [Function: isAddress],
        checkAddressChecksum: [Function: checkAddressChecksum],
        toChecksumAddress: [Function: toChecksumAddress],
        toHex: [Function: toHex],
        toBN: [Function: toBN],
        bytesToHex: [Function: bytesToHex],
        hexToBytes: [Function: hexToBytes],
        hexToNumberString: [Function: hexToNumberString],
        hexToNumber: [Function: hexToNumber],
        toDecimal: [Function: hexToNumber],
        numberToHex: [Function: numberToHex],
        fromDecimal: [Function: numberToHex],
        hexToUtf8: [Function: hexToUtf8],
        hexToString: [Function: hexToUtf8],
        toUtf8: [Function: hexToUtf8],
        utf8ToHex: [Function: utf8ToHex],
        stringToHex: [Function: utf8ToHex],
        fromUtf8: [Function: utf8ToHex],
        hexToAscii: [Function: hexToAscii],
        toAscii: [Function: hexToAscii],
        asciiToHex: [Function: asciiToHex],
        fromAscii: [Function: asciiToHex],
        unitMap: [Object],
        toWei: [Function: toWei],
        fromWei: [Function: fromWei],
        padLeft: [Function: leftPad],
        leftPad: [Function: leftPad],
        padRight: [Function: rightPad],
        rightPad: [Function: rightPad],
        toTwosComplement: [Function: toTwosComplement] },
     Method: [Function: Method] },
  defaultAccount: [Getter/Setter],
  defaultBlock: [Getter/Setter],
  clearSubscriptions: [Function],
  net:
   Net {
     currentProvider: [Getter/Setter],
     _requestManager:
      RequestManager {
        provider: [HttpProvider],
        providers: [Object],
        subscriptions: {} },
     givenProvider: null,
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     _provider:
      HttpProvider {
        host: 'http://localhost:8545',
        httpAgent: [Agent],
        timeout: 0,
        headers: undefined,
        connected: false },
     setProvider: [Function],
     BatchRequest: [Function: bound Batch],
     extend:
      { [Function: ex]
        formatters: [Object],
        utils: [Object],
        Method: [Function: Method] },
     getId:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'net_version' },
     isListening:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'net_listening' },
     getPeerCount:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'net_peerCount' },
     getNetworkType: [Function: bound getNetworkType] },
  accounts:
   Accounts {
     currentProvider: [Getter/Setter],
     _requestManager:
      RequestManager {
        provider: [HttpProvider],
        providers: [Object],
        subscriptions: {} },
     givenProvider: null,
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     _provider:
      HttpProvider {
        host: 'http://localhost:8545',
        httpAgent: [Agent],
        timeout: 0,
        headers: undefined,
        connected: false },
     setProvider: [Function],
     _ethereumCall:
      { getId: [Function],
        getGasPrice: [Function],
        getTransactionCount: [Function] },
     wallet:
      Wallet {
        _accounts: [Circular],
        length: 0,
        defaultKeyName: 'web3js_wallet' } },
  personal:
   Personal {
     currentProvider: [Getter/Setter],
     _requestManager:
      RequestManager {
        provider: [HttpProvider],
        providers: [Object],
        subscriptions: {} },
     givenProvider: null,
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     _provider:
      HttpProvider {
        host: 'http://localhost:8545',
        httpAgent: [Agent],
        timeout: 0,
        headers: undefined,
        connected: false },
     setProvider: [Function],
     BatchRequest: [Function: bound Batch],
     extend:
      { [Function: ex]
        formatters: [Object],
        utils: [Object],
        Method: [Function: Method] },
     net:
      Net {
        currentProvider: [Getter/Setter],
        _requestManager: [RequestManager],
        givenProvider: null,
        providers: [Object],
        _provider: [HttpProvider],
        setProvider: [Function],
        BatchRequest: [Function: bound Batch],
        extend: [Function],
        getId: [Function],
        isListening: [Function],
        getPeerCount: [Function] },
     defaultAccount: [Getter/Setter],
     defaultBlock: [Getter/Setter],
     getAccounts:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_listAccounts' },
     newAccount:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_newAccount' },
     unlockAccount:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_unlockAccount' },
     lockAccount:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_lockAccount' },
     importRawKey:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_importRawKey' },
     sendTransaction:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_sendTransaction' },
     signTransaction:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_signTransaction' },
     sign:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_sign' },
     ecRecover:
      { [Function: send]
        method: [Method],
        request: [Function: bound ],
        call: 'personal_ecRecover' } },
  Contract:
   { [Function: Contract]
     setProvider: [Function],
     defaultAccount: null,
     defaultBlock: 'latest',
     currentProvider: [Getter/Setter],
     _requestManager:
      RequestManager {
        provider: [HttpProvider],
        providers: [Object],
        subscriptions: {} },
     givenProvider: null,
     providers:
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },
     _provider:
      HttpProvider {
        host: 'http://localhost:8545',
        httpAgent: [Agent],
        timeout: 0,
        headers: undefined,
        connected: false },
     BatchRequest: [Function: bound Batch],
     extend:
      { [Function: ex]
        formatters: [Object],
        utils: [Object],
        Method: [Function: Method] },
     _ethAccounts:
      Accounts {
        currentProvider: [Getter/Setter],
        _requestManager: [RequestManager],
        givenProvider: null,
        providers: [Object],
        _provider: [HttpProvider],
        setProvider: [Function],
        _ethereumCall: [Object],
        wallet: [Wallet] } },
  Iban:
   { [Function: Iban]
     toAddress: [Function],
     toIban: [Function],
     fromAddress: [Function],
     fromBban: [Function],
     createIndirect: [Function],
     isValid: [Function] },
  abi: ABICoder {},
  ens: ENS { eth: [Circular] },
  getNodeInfo:
   { [Function: send]
     method:
      Method {
        name: 'getNodeInfo',
        call: 'web3_clientVersion',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'web3_clientVersion' },
  getProtocolVersion:
   { [Function: send]
     method:
      Method {
        name: 'getProtocolVersion',
        call: 'eth_protocolVersion',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_protocolVersion' },
  getCoinbase:
   { [Function: send]
     method:
      Method {
        name: 'getCoinbase',
        call: 'eth_coinbase',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_coinbase' },
  isMining:
   { [Function: send]
     method:
      Method {
        name: 'isMining',
        call: 'eth_mining',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_mining' },
  getHashrate:
   { [Function: send]
     method:
      Method {
        name: 'getHashrate',
        call: 'eth_hashrate',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: [Function: hexToNumber],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_hashrate' },
  isSyncing:
   { [Function: send]
     method:
      Method {
        name: 'isSyncing',
        call: 'eth_syncing',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: [Function: outputSyncingFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_syncing' },
  getGasPrice:
   { [Function: send]
     method:
      Method {
        name: 'getGasPrice',
        call: 'eth_gasPrice',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: [Function: outputBigNumberFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_gasPrice' },
  getAccounts:
   { [Function: send]
     method:
      Method {
        name: 'getAccounts',
        call: 'eth_accounts',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: [Function: toChecksumAddress],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_accounts' },
  getBlockNumber:
   { [Function: send]
     method:
      Method {
        name: 'getBlockNumber',
        call: 'eth_blockNumber',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: [Function: hexToNumber],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_blockNumber' },
  getBalance:
   { [Function: send]
     method:
      Method {
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [Array],
        outputFormatter: [Function: outputBigNumberFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_getBalance' },
  getStorageAt:
   { [Function: send]
     method:
      Method {
        name: 'getStorageAt',
        call: 'eth_getStorageAt',
        params: 3,
        inputFormatter: [Array],
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_getStorageAt' },
  getCode:
   { [Function: send]
     method:
      Method {
        name: 'getCode',
        call: 'eth_getCode',
        params: 2,
        inputFormatter: [Array],
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_getCode' },
  getBlock:
   { [Function: send]
     method:
      Method {
        name: 'getBlock',
        call: [Function: blockCall],
        params: 2,
        inputFormatter: [Array],
        outputFormatter: [Function: outputBlockFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: [Function: blockCall] },
  getUncle:
   { [Function: send]
     method:
      Method {
        name: 'getUncle',
        call: [Function: uncleCall],
        params: 2,
        inputFormatter: [Array],
        outputFormatter: [Function: outputBlockFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: [Function: uncleCall] },
  getBlockTransactionCount:
   { [Function: send]
     method:
      Method {
        name: 'getBlockTransactionCount',
        call: [Function: getBlockTransactionCountCall],
        params: 1,
        inputFormatter: [Array],
        outputFormatter: [Function: hexToNumber],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: [Function: getBlockTransactionCountCall] },
  getBlockUncleCount:
   { [Function: send]
     method:
      Method {
        name: 'getBlockUncleCount',
        call: [Function: uncleCountCall],
        params: 1,
        inputFormatter: [Array],
        outputFormatter: [Function: hexToNumber],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: [Function: uncleCountCall] },
  getTransaction:
   { [Function: send]
     method:
      Method {
        name: 'getTransaction',
        call: 'eth_getTransactionByHash',
        params: 1,
        inputFormatter: [Array],
        outputFormatter: [Function: outputTransactionFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_getTransactionByHash' },
  getTransactionFromBlock:
   { [Function: send]
     method:
      Method {
        name: 'getTransactionFromBlock',
        call: [Function: transactionFromBlockCall],
        params: 2,
        inputFormatter: [Array],
        outputFormatter: [Function: outputTransactionFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: [Function: transactionFromBlockCall] },
  getTransactionReceipt:
   { [Function: send]
     method:
      Method {
        name: 'getTransactionReceipt',
        call: 'eth_getTransactionReceipt',
        params: 1,
        inputFormatter: [Array],
        outputFormatter: [Function: outputTransactionReceiptFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_getTransactionReceipt' },
  getTransactionCount:
   { [Function: send]
     method:
      Method {
        name: 'getTransactionCount',
        call: 'eth_getTransactionCount',
        params: 2,
        inputFormatter: [Array],
        outputFormatter: [Function: hexToNumber],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_getTransactionCount' },
  sendSignedTransaction:
   { [Function: send]
     method:
      Method {
        name: 'sendSignedTransaction',
        call: 'eth_sendRawTransaction',
        params: 1,
        inputFormatter: [Array],
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_sendRawTransaction' },
  signTransaction:
   { [Function: send]
     method:
      Method {
        name: 'signTransaction',
        call: 'eth_signTransaction',
        params: 1,
        inputFormatter: [Array],
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_signTransaction' },
  sendTransaction:
   { [Function: send]
     method:
      Method {
        name: 'sendTransaction',
        call: 'eth_sendTransaction',
        params: 1,
        inputFormatter: [Array],
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_sendTransaction' },
  sign:
   { [Function: send]
     method:
      Method {
        name: 'sign',
        call: 'eth_sign',
        params: 2,
        inputFormatter: [Array],
        outputFormatter: undefined,
        transformPayload: [Function: transformPayload],
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_sign' },
  call:
   { [Function: send]
     method:
      Method {
        name: 'call',
        call: 'eth_call',
        params: 2,
        inputFormatter: [Array],
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_call' },
  estimateGas:
   { [Function: send]
     method:
      Method {
        name: 'estimateGas',
        call: 'eth_estimateGas',
        params: 1,
        inputFormatter: [Array],
        outputFormatter: [Function: hexToNumber],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_estimateGas' },
  submitWork:
   { [Function: send]
     method:
      Method {
        name: 'submitWork',
        call: 'eth_submitWork',
        params: 3,
        inputFormatter: undefined,
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_submitWork' },
  getWork:
   { [Function: send]
     method:
      Method {
        name: 'getWork',
        call: 'eth_getWork',
        params: 0,
        inputFormatter: undefined,
        outputFormatter: undefined,
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_getWork' },
  getPastLogs:
   { [Function: send]
     method:
      Method {
        name: 'getPastLogs',
        call: 'eth_getLogs',
        params: 1,
        inputFormatter: [Array],
        outputFormatter: [Function: outputLogFormatter],
        transformPayload: undefined,
        extraFormatters: undefined,
        requestManager: [RequestManager],
        accounts: [Accounts],
        defaultBlock: 'latest',
        defaultAccount: null },
     request: [Function: bound ],
     call: 'eth_getLogs' },
  subscribe: [Function] }

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

  // LendContract.deploy({
  //     arguments: [123, 'My String']
  // })
  // .estimateGas(function(err, gas){
  //     console.log(gas);
       res.send({success: true})
  // });

});