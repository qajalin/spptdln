 async function decline(){
    console.log("Decline Process Started");

    const declinedData = await axios.get(inputDir + inputDeclined)

    console.log("Declined Data:", declinedData.data);
    await doDeclined(declinedData.data )
}


async function doDeclined(data){
    try {
        let response =await axios.get("evidence/gambar.jpg",{responseType:'blob'});
        console.log("Evidence Response:", response.data);
        const blobData = new Blob([response.data], { type: 'image/jpg' });
        console.log("Blob Data:", blobData);

    

    } catch (error) {
        
    }
}