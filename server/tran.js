var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon.stellar.org');
var sourceKeys = StellarSdk.Keypair
    .fromSecret('SCTCGIJ5EQREBUJPB3KA7XNFOXWKZKNX4BDXX5SPNZH2UCCZQ3MKULDD');
var destinationId = 'GDJF2FGZEHAN2WRTH77VRDNTWSBFSOKHPTFHVGVILAA4VQSNI3DL74IO';
// Transaction will hold a built transaction we can resubmit if the result is unknown.
var transaction;

// First, check to make sure that the destination account exists.
// You could skip this, but if the account does not exist, you will be charged
// the transaction fee when the transaction fails.
server.loadAccount(destinationId)
    // If the account is not found, surface a nicer error message for logging.
    .catch(function (error) {
        console.log(error, 4324)
        if (error instanceof StellarSdk.NotFoundError) {
            throw new Error('The destination account does not exist!');
        } else return error
    })
    // If there was no error, load up-to-date information on your account.
    .then(function () {
        return server.loadAccount(sourceKeys.publicKey());
    })
    .then(function (sourceAccount) {
        // Start building the transaction.
        transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
            fee: StellarSdk.BASE_FEE,
            networkPassphrase: StellarSdk.Networks.TESTNET
        })
            .addOperation(StellarSdk.Operation.payment({
                destination: "GB2SJ2N2YJ5WJQJQMPGUWPUYYI2LSS3MSXJWUB4CGPFIC3FMRKMDFIZS",
                // Because Stellar allows transaction in many currencies, you must
                // specify the asset type. The special "native" asset represents Lumens.
                asset: StellarSdk.Asset.native(),
                amount: "1"
            }))
            // A memo allows you to add your own metadata to a transaction. It's
            // optional and does not affect how Stellar treats the transaction.
            .addMemo(StellarSdk.Memo.text('Test Transaction'))
            // Wait a maximum of three minutes for the transaction
            .setTimeout(180)
            .build();
        // Sign the transaction to prove you are actually the person sending it.
        transaction.sign(sourceKeys);
        // And finally, send it off to Stellar!
        return server.submitTransaction(transaction);
    })
    .then(function (result) {
        console.log('Success! Results:', result);
    })
    .catch(function (error) {
        console.error('Something went wrong!', error);
        // If the result is unknown (no response body, timeout etc.) we simply resubmit
        // already built transaction:
        // server.submitTransaction(transaction);
    });