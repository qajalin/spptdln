async function generateToken() {
    console.log(pspPrivateKey);
    const timestamp = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    const stringToSign = `${pspApiKey}|${timestamp}`;

    const sig = new KJUR.crypto.Signature({alg: "SHA256withRSA"});
    sig.init(pspPrivateKey);
    sig.updateString(stringToSign);
    const signature = CryptoJS.enc.Hex.parse(sig.sign()).toString().toLowerCase();

    const baseUrlToken = `${baseURL}/v1/psp/token`;
    const body = {"grantType":"client_credentials"}
    
    const headers = {
        'X-PARTNER-ID': pspApiKey,
        'X-SIGNATURE': signature,
        'X-TIMESTAMP': timestamp,
        'Content-Type': 'application/json' 
    }

    await axios.post(`${baseURL}/v1/psp/token`,body , { headers }).then(response => {
        //console.log("Generate Token Response:", response.data);
        adminToken = response.data.content.accessToken;
        console.log("Generated Token:", adminToken);
    })

}