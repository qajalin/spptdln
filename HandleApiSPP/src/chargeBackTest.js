async function chargeBackTest() {
    let arr = []; 
    for (const es of tcArray) {
        for (const mcc of es.mccCode) {
            for (const pmt of paymentMethod) {
                for (const currency of currencyList) {
                    const res = await register({
                        mcc,
                        countryCode: es.countryCode,
                        currency,
                        merchantCountryCode: es.merchantCountryCode,
                        classification: es.classification,
                        clientTimestamp: moment().format('YYYYMMDDHHmmss')
                    });

                     console.log("Response Register:", res.response);
                
                    if(res.response && res.response.status === 200){
                        const resVerify = await verifyTrx(res, pmt);
                        arr.push({ 
                           case:`mcc: ${mcc} - pmt: ${pmt} `,
                            register:{
                                request:{
                                    body:resVerify.payloadRegister,     
                                },
                                response:{
                                    httpCode:res.response.status,
                                    body:resVerify.responseRegister.data?resVerify.responseRegister.data:null
                                }

                            },
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
                    else{
                        arr.push({ 
                           case:`mcc: ${mcc} - pmt: ${pmt} `,
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
                }
                      
            }
        }
    }

    console.log("Final Result Array:", arr);
    downloadFile(arr, `Non_PMSE_Log_Trx - ${moment().format('YYYYMMDDHHmmss')}.json`);
}


function downloadFile(content, filename) {
            

            // 3. Create a 'Blob' object
            // A Blob (Binary Large Object) is an object that holds raw data.
            // We set the 'type' to 'text/plain' to indicate it's a plain text file.
            content = JSON.stringify(content, null, 2); // Pretty-print JSON with indentation
            const blob = new Blob([content], { type: 'application/json' });

            // 4. Create a temporary 'a' (anchor) tag
            // This is a clever trick to trigger a browser download.
            const a = document.createElement('a');

            // 5. Create a URL for the Blob object
            // This URL points to the data stored in the browser's memory (the Blob).
            a.href = URL.createObjectURL(blob);

            // 6. Set the 'download' attribute of the anchor tag
            // This attribute tells the browser to download the linked resource
            // instead of navigating to it, using the provided filename.
            a.download = filename;

            // 7. Programmatically click the anchor tag
            // This simulates a user clicking a download link.
            document.body.appendChild(a); // Append the link to the body (required for Firefox)
            a.click();

            // 8. Clean up
            // Remove the temporary anchor tag from the document
            document.body.removeChild(a);
            // Revoke the object URL to free up browser memory
            URL.revokeObjectURL(a.href);
        }



