async function verifyTrx(resRegister,pmt) {
    let payloadRegister = resRegister.payloadRegister
    let payloadVerify = dataVerify(resRegister.payloadRegister.mccCode, resRegister.payloadRegister.countryCode, resRegister.payloadRegister.currency, resRegister.payloadRegister.mccCode, pmt, moment().format('MMDDHHmmss'))
    let responseRegister = null
    try {
        
    let path = "/v1/transaction/verifyTransaction"
    let headers = configHeaderVerify(payloadVerify,path,resRegister.response.data.content.apiKey)
    responseRegister = resRegister.response?resRegister.response:register.error

    let responseVerify = await axios.post(`${baseURL}${path}`,payloadVerify,{ headers })

    console.log("Response Verify Trx:", responseVerify);

    

    return {payloadRegister,payloadVerify,responseVerify,responseRegister}
    } catch (error) {
        console.error("Error verifying transaction:", error);
        return {payloadRegister,payloadVerify,error,responseRegister}
    }

}



function configHeaderVerify(payloadVerify,path,merchantKey){
    const timestamp = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    const local_hashedBody = CryptoJS.SHA256(JSON.stringify(payloadVerify)).toString().toString().toLowerCase()
    const local_stringToSign = `POST:${path}:${adminToken}:${local_hashedBody}:${timestamp}`;
    const local_signature = CryptoJS.HmacSHA256(local_stringToSign, pspSecret). toString().toLowerCase();

    return {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${adminToken}`,
                'X-SIGNATURE':local_signature,
                'X-TIMESTAMP':timestamp,
                'X-PARTNER-ID':pspApiKey,
                'X-MERCHANT-KEY': merchantKey
            }
}

function dataVerify(mccCode, countryCode, currency, mccCode, pmt, txnTimestamp) {
    let issuer = getRandomElement(bankList);
    let totalAmount = generateRandomInt(260000,300000)
    let retrievalRefNumber = generateRandomString(6)
    return {
        ref: `${prefix}_${txnTimestamp}_${retrievalRefNumber}`,
        totalAmount,
        currency,
        countryCode,
        paymentMethods: {
            [pmt]: totalAmount
        },
        mccCode,
        issuingBank: issuer,
        issuerCountryCode: "ID",
        cardType: pmt==="WALLET"?"GPN":getRandomElement(principleList),
        retrievalRefNumber,
        destinationType: 'PAYMENT', //enum
    
        transactionTime: moment().add(-1,"second").format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
}







   


