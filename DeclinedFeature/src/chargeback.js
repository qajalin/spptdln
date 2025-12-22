 async function chargeback(data){
    console.log("Chargeback Process Started");

    //const declinedData = await axios.get(inputDir + inputDeclined)
    //console.log("Declined Data:", declinedData.data);
    //await doDeclined(declinedData.data )

    console.log("bodyRequest:", bodyRequestChargeback(data));
    let payloadRequest = bodyRequestChargeback(data);
    let path = "/v1/transaction/chargeBack"
    let response = null;
      
    try {
        response = await axios.post(`${baseURL}${path}`, payloadRequest, { headers: headerRequest(data,payloadRequest,path) })
        return {response,payloadRequest,data}

    } catch (error) {
        return {response,payloadRequest,error,data}
    }
}

// const bodyRequestChargeback = data =>{
//     const {totalAmount, vatAmount,} = data.verify.response.body.content
//     const {retrievalRefNumber, currency,transactionTime,ref} = data.verify.request.body
//     const {"X-TIMESTAMP":xtimeStamp} = data.verify.request.header
//     const timestamp  = moment().unix()
//     return {
//         transactionRef:ref,
//         ref: `CHB_${ref}`,
//         currency:"IDR",
//         refundAmount:totalAmount,
//         refundVatAmount:vatAmount,
//         reason:"CANCELLATION",
//         verifiedTransactionAmount:totalAmount,
//         verifiedRetrievalRefNumber:retrievalRefNumber,
//         verifiedTransactionTimestamp:transactionTime
//     }
// }


// const bodyRequestChargeback = data =>{
//     const {totalAmount, vatAmount,} = data.verify.response.body.content
//     const {retrievalRefNumber, currency,transactionTime,ref} = data.verify.request.body
//     const {"X-TIMESTAMP":xtimeStamp} = data.verify.request.header
//     const timestamp  = moment().format('YYYYMMDDHHmmss')
//     const totPartial = generateRandomInt(1000,20000)
//     return {
//         transactionRef:ref,
//         ref: `CHB_${ref}`,
//         currency:"IDR",
//         refundAmount:parseInt(totalAmount)-totPartial,
//         refundVatAmount:parseInt(vatAmount)-(totPartial*0.11),
//         reason:"PARTIAL",
//         verifiedTransactionAmount:totalAmount,
//         verifiedRetrievalRefNumber:retrievalRefNumber,
//         verifiedTransactionTimestamp:transactionTime
//     }
// }



const bodyRequestChargeback = data =>{
    const {totalAmount, vatAmount,} = data.verify.response.body.content
    const {retrievalRefNumber, currency,transactionTime,ref} = data.verify.request.body
    const {"X-TIMESTAMP":xtimeStamp} = data.verify.request.header
    const timestamp  = moment().format('YYYYMMDDHHmmss')
    return {
        transactionRef:ref,
        ref: `CHB_${ref}`,
        currency:"IDR",
        refundAmount:0,
        refundVatAmount:vatAmount,
        reason:"TAX_CORRECTION",
        verifiedTransactionAmount:totalAmount,
        verifiedRetrievalRefNumber:retrievalRefNumber,
        verifiedTransactionTimestamp:transactionTime
    }
}




