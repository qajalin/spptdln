async function verifyTrx(countryCode,pmt,destinationType,currency) {
    let payloadVerify = dataVerify(countryCode, currency, pmt, moment().format('MMDDHHmmss'), destinationType)
    try {
        
    let path = "/v1/transaction/verifyTransaction"
    let headers = configHeaderVerify(payloadVerify,path)

    let responseVerify = await axios.post(`${baseURL}${path}`,payloadVerify,{ headers })

    // console.log("Response Verify Trx:", responseVerify);

    return {payloadVerify,responseVerify}
    } catch (error) {
        console.error("Error verifying transaction:", error);
        return {payloadVerify,error}
    }

    
}



function configHeaderVerify(payloadVerify,path){
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
                'X-MERCHANT-KEY': clientApiKey // Static for testing purpose 
            }
}

function dataVerify( countryCode, currency, pmt, txnTimestamp, destinationType) {
    let issuer = getRandomElement(bankList);
    let destinationParticipantID = getRandomElement(bankList);
    let ref = generateRandomString(12)
    return {
    ref: `BANK_${txnTimestamp}_${ref}`,
    totalAmount:10000,
    currency,
    countryCode,
    paymentMethods: {
        [pmt]: 10000
    },
    transactionFee: 0,
    issuingBank: issuer,
    issuerCountryCode: "ID",
    cardType: getRandomElement(principleList),
    //entryMode: "CHIP",
    //posConditionCode: "00",
    //authCode: `AUTH${txnTimestamp}_1`,
    retrievalRefNumber: ref,
    destinationType,
    networkHashedDestination: `NETv1:${generateHmac256(netHashKey, generateRandomString(100))}`,
    originParticipantID: issuer,
    destinationParticipantID,
    transactionTime: moment().add(-1,"seconds").format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
}









   


