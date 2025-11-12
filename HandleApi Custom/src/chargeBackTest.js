async function chargeBackTest() {
    let arrCSV = []
    let arr = []; 
    for (const es of tcArray) {
        for (const mcc of es.mccCode) {
                for (const currency of currencyList) {
                    const res = await register({
                        mcc,
                        countryCode: es.countryCode,
                        currency,
                        merchantCountryCode: es.merchantCountryCode,
                        classification: es.classification,
                        clientTimestamp: moment().format('YYYYMMDDHHmmss')
                    });

                     console.log("Response Register:", res);
                

                    
                        arr.push({ 
                           case:`mcc: ${mcc} `,
                            register:{
                                request:{
                                    body:res.payloadRegister,     
                                },
                                response:{
                                    httpCode:res.response.status,
                                    body:res.response.data?res.response.data:null
                                }

                            },
                          
                        });

                        arrCSV.push(res.payloadRegister.registeredName)

                        console.log("Response Verify:", res);
                        

                    
                       
                }
                      
            
        }
    }

    console.log("Final Result Array:", arr);
    downloadFile(arr, `Non_PMSE_Log_Trx - ${moment().format('YYYYMMDDHHmmss')}.json`);
    downloadCSV(convertSimpleArrayToCSV(arrCSV,"regiseredName"), `Non_PMSE_RegisteredName - ${moment().format('YYYYMMDDHHmmss')}.csv`);
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



