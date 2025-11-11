async function chargeBackTest() {
    let arr = []; 
    for (const destinationTypeItem of destinationType) {
        for (const pmt of paymentMethod) {
                for (const currency of currencyList) {
                    
                 
                    const resVerify = await verifyTrx("ID",pmt,destinationTypeItem,currency);

                    console.log("Response Verify:", resVerify);

                        arr.push({ 
                           case:`destinationType: ${destinationTypeItem} - pmt: ${pmt} `,
                    
                            verify:{
                                request:{
                                    body:resVerify.payloadVerify,
                                    header:resVerify.error?resVerify.error.config.headers:null

                                },
                                response:{
                                    httpCode:resVerify.responseVerify?resVerify.responseVerify.status:null,
                                    body:resVerify.responseVerify? resVerify.responseVerify.data : resVerify.error.response.data

                                }
                            }
                        });
                        console.log("Response Verify:", resVerify);

                    
                          
                }
                      
            }
    }
     

    console.log("Final Result Array:", arr);
    downloadFile(arr, `Non_PMSE_Log_Trx - ${moment().format('YYYYMMDDHHmmss')}.json`);
}






