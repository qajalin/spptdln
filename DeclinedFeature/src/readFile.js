async function readFile(process) {
   
    console.log("Read Fileq Process Started");

    const dataInput = await axios.get(inputDir + inputDeclined)

    //If process is decline
    for(const item of dataInput.data){
        
        
        console.log("Processing Item:", item);
        let returnedData;
        if(process==='decline') returnedData = await decline(item);
        else if(process==='chargeback') returnedData = await chargeback(item);

        console.log('log:',returnedData)
    }
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



