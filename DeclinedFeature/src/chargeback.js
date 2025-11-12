 async function chargeback(data){
    console.log("Chargeback Process Started");

    //const declinedData = await axios.get(inputDir + inputDeclined)
    //console.log("Declined Data:", declinedData.data);
    //await doDeclined(declinedData.data )

    console.log("bodyRequest:", bodyRequestChargeback(data));
    let payloadRequest = bodyRequestChargeback(data);
    let path = "/v1/transaction/chargeBack"
    console.log("headerRequest:", headerRequest(data,payloadRequest,path));  
    let response = null;
      
    try {
        response = await axios.post(`${baseURL}${path}`, payloadRequest, { headers: headerRequest(data,payloadRequest,path) })
        return {response,payloadRequest}

    } catch (error) {
        return {response,payloadRequest,error}
    }
}

const bodyRequestChargeback = data =>{
    const {totalAmount, vatAmount,} = data.verify.response.body.content
    const {retrievalRefNumber, currency,transactionTime,ref} = data.verify.request.body
    return {
        ref,
        reason:"CANCELLATION",//CANCELLATION | TAX_CORRECTION |PARTIAL
        originalAmount:totalAmount,
        originalVatAmount:vatAmount,
        originalRetrievalRefNumber:retrievalRefNumber,
        originalTimestamp:transactionTime,
        currency,
        refundAmount:totalAmount,
        refundVatAmount:vatAmount,
    }
}




