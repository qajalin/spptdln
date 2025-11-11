 async function decline(){
    console.log("Decline Process Started");

    const declinedData = await axios.get(inputDir + inputDeclined)

    console.log("Declined Data:", declinedData.data);
    await doDeclined(declinedData.data )
}


async function doDeclined(data){
    let path = "/v1/transaction/declineTransaction"

    try {
        
    } catch (error) {
        
    }
}

