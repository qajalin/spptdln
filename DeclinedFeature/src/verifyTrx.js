async function verifyTrx(resRegister,pmt) {
    let payloadRegister = resRegister.payloadRegister
    let payloadVerify = dataVerify(resRegister.register.request.body.mccCode, resRegister.register.request.body.countryCode, resRegister.register.request.body.currency, pmt, moment().format('YYYYMMDDHHmmss'))
    let responseRegister = null
    console.log("Payload Verify Trx:", payloadVerify);
    try {
        
    let path = "/v1/transaction/verifyTransaction"
    let headers = configHeaderVerify(payloadVerify,path,resRegister.register.response.body.content.apiKey)
    

    let responseVerify = await axios.post(`${baseURL}${path}`,payloadVerify,{ headers })

    console.log("Response Verify Trx:", responseVerify);

    

    return {payloadRegister,payloadVerify,responseVerify}
    } catch (error) {
        console.error("Error verifying transaction:", error);
        return {payloadRegister,payloadVerify,error}
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

function dataVerify(mccCode, countryCode, currency, pmt, txnTimestamp) {
    let issuer = getRandomElement(bankList);
    return {
        ref: `BANK_${txnTimestamp}_${generateRandomString(5)}`,
        totalAmount:10000,
        currency,
        countryCode,
        paymentMethods: {
            [pmt]: 10000
        },
        transactionFee: 0,
        mccCode,
        issuingBank: issuer,
        issuerCountryCode: "ID",
        cardType: getRandomElement(principleList),
        entryMode: "CHIP",
        posConditionCode: "00",
        authCode: `AUTH${txnTimestamp}_1`,
        retrievalRefNumber: `RET${txnTimestamp}_1`,
        destinationType: 'PAYMENT', //enum
    
        transactionTime: moment().add(-0.2,"seconds").format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
}


async function verifyTransaction() {
    let arrVerify = [];
    let inputVerifyData = await axios.get(`${inputDir}${inputVerify}`)
        console.log("Input Verify Data:", inputVerifyData.data);
    
    for(const iv of inputVerifyData.data){
        for(const pmt of paymentMethod){

                let resVerify = await verifyTrx(iv,pmt)
                console.log("Response Verify Transaction:", resVerify);
                arrVerify.push({
                    register:iv.register,
                    verify:{
                        request:resVerify.payloadVerify,
                        response:{
                            httpCode:resVerify.responseVerify?resVerify.responseVerify.status:null,
                            body:resVerify.responseVerify?resVerify.responseVerify.data:null
                        }
                    }

                })

        }
    }
    console.log("Final Verify Result Array:", arrVerify);
    downloadFile(arrVerify, `Non_PMSE_Log_VerifyTrx_Potential_collected - ${moment().format('YYYYMMDDHHmmss')}.json`);

}






   


