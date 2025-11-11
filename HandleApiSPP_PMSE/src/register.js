async function register(data ) {
  let payloadRegister = dataRegister(data.mcc, data.countryCode, data.currency, data.merchantCountryCode,data.classification, moment().format('YYYYMMDDHHmmss'),data.registeredName,data.merchantCity)
  let path = "/v1/client/registerClient"
  let headers = configHeaderRegister(payloadRegister,path)
  let response = null
  try {

    //console.log("headers:",headers)
    response = await axios.post(`${baseURL}${path}`,payloadRegister,{ headers })
    return {response,payloadRegister}
  } catch (error) {
      console.error("Error registering client:", error);
      return {response,payloadRegister,error}
  }
}

function configHeaderRegister(payloadRegister,path){
    const timestamp = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    const local_hashedBody = CryptoJS.SHA256(JSON.stringify(payloadRegister)).toString().toString().toLowerCase()
    const local_stringToSign = `POST:${path}:${adminToken}:${local_hashedBody}:${timestamp}`;
    const local_signature = CryptoJS.HmacSHA256(local_stringToSign, pspSecret). toString().toLowerCase();

    return {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${adminToken}`,
                'X-SIGNATURE':local_signature,
                'X-TIMESTAMP':timestamp,
                'X-PARTNER-ID':pspApiKey    
            }
}



 function dataRegister (mcc,countryCode,currency,merchantCountryCode, classification, clientTimestamp,registeredName,merchantCity)  {

     return {
        registeredName,
        registrationNumber: `REG${clientTimestamp}`,
        countryCode,
        merchantName:`Perusahaan DI ${mcc} - ${generateRandomString(5)}`,
        currency,
        classification,
        mccCode: `${mcc}`,
        merchantCity,
        merchantCountryCode,
        acquirerInstitutionId: `ACQ${generateRandomString(5)}`,
        phoneNumber:"+91123456789",
        merchantId:`MID-${generateRandomString(5)}`
     }
  
 }