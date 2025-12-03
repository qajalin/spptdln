async function chargeBackTest() {
    let outputdataChargebackPath = "output/chargebackTestResult.json";
    let arr = []; 


    

    for(const es of pmseList){
        for(const pmt of paymentMethod){
            for(const curr of currencyList){
                 try {
                    const res = await register({
                        mcc: es.mccCode,
                        countryCode: es.countryCode,
                        currency: curr,
                        merchantCountryCode: es.merchantCountryCode,
                        classification: es.classification,
                        clientTimestamp: moment().format('YYYYMMDDHHmmss'),
                        merchantName: es.merchantName,
                        merchantCity: es.merchantCity,
                        acquirerInstitutionId: es.acquirerInstitutionId,
                        phoneNumber: es.phoneNumber,
                        registeredName: es.registeredName,
                        merchantCity: es.merchantCity
                    });

                    console.log("Response Register:", res.response);

                    if(res.response && res.response.status === 200){
                        const resVerify = await verifyTrx(res, pmt);
                        console.log(resVerify)
                        arr.push({ 
                           case:`mcc: ${es.mccCode} - pmt: ${pmt} `,
                            register:{
                                request:{
                                    body:resVerify.payloadRegister,     
                                },
                                response:{
                                    httpCode:res.response.status,
                                    body:resVerify.responseRegister.data?resVerify.responseRegister.data:null,
                                    
                                }
                            },
                            verify:{
                                request:{
                                    body:resVerify.payloadVerify,
                                    header:resVerify.error?resVerify.error.config.headers:resVerify.responseVerify.config.headers,

                                },
                                response:{
                                    httpCode:resVerify.responseVerify?resVerify.responseVerify.status:null,
                                    body:resVerify.responseVerify? resVerify.responseVerify.data : resVerify.error.response.data

                                }
                            }
                        });

                    }
                    else{
                        arr.push({ 
                           case:`mcc: ${es.mccCode} - pmt: ${pmt} - Failed Register`,
                            register:{
                                request:{
                                    body:res.payloadRegister,
                                    header:res.error?res.error.config.headers:null
                                },
                                response:{
                                    body:res.responseRegister?resVerify.responseRegister.data:res.error.response.data
                                }
                            },
                            verify:"failed when registering client"
                        });
                    }             

                } catch (error) {
                    console.error("Gagal memproses transaksi:", error);
                }
            }
                           
        }
    }

    console.log("Final Result Array:", arr);
    console.log("total case:", arr.length);
    downloadFile(arr, `PMSE_Log_Trx -${moment().format('YYYYMMDDHHmmss')}.json`);

}



