 async function decline(data){
    console.log("Decline Process Started");

    //const declinedData = await axios.get(inputDir + inputDeclined)
    //console.log("Declined Data:", declinedData.data);
    //await doDeclined(declinedData.data )

    console.log("bodyRequest:", bodyRequest(data));
    let payloadRequest = bodyRequest(data);
    let path = "/v1/transaction/declineTransaction"
    let response = null

    
    try {
        response = await axios.post(`${baseURL}${path}`, payloadRequest, { headers: headerRequest(data,payloadRequest,path) })
        return {response,payloadRequest}

    } catch (error) {
        return {response,payloadRequest,error}
    }
}




const bodyRequest = data =>{
    const {totalAmount, vatAmount,} = data.verify.response.body.content
    const {retrievalRefNumber, currency,transactionTime,ref} = data.verify.request.body
    return {
        ref,
        reason:"CANCELLATION",
        originalAmount:totalAmount,
        originalVatAmount:vatAmount,
        originalRetrievalRefNumber:retrievalRefNumber,
        originalTimestamp:transactionTime,
        currency,
        refundAmount:totalAmount,
        refundVatAmount:vatAmount,
    }
}




