//SIT API
let baseURL = "https://sentinal-api-dev-749998763474.asia-southeast2.run.app"

//UAT API
//let baseURL = "https://sentinal-api.internal.uat.gcp.indonesia.mascottasia.com"


//GeneralVar
let adminToken = ""
// let clientApiKey = ""
// let clientSecret = ""

//RSA 1
// const pspApiKey = "5c841251dbb2dce84dca4f5d43af01e855448ab9b182d66576059b3f3f53a023"
// const pspSecret = "7677b42de58f3feec7b6a1f419db3dc53087863b6c6a7d80897482bb87fb88f6"
// const pspPrivateKey = `-----BEGIN PRIVATE KEY-----MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAM87w6XmJQAmll4I2kL9teJPnypFLrc4yi66L05mqcs5DbR7JdFghnqRfbeELFQE/fybQLcvjOh5MJxW6nF0merdiv0jEJzTRmeZ3HMaUj+Bt0TmlKHllbHESfq1lccGdDBuEknHt2z6Z3Oy6i5ezoHJlSWUJC4/jTrR/BjM8y9tAgMBAAECgYBs47ZWAawHfD8eggBNmwprM/MqPtfhJlH2Y5Zf18n4Iq502xBwCAwhczlfqG+yZj0e8mT63F1p+eP1AiaGHwKQV7n2NvEqKeBDkBQfbA4q7Ok7aALI1QsxFfNaxpHzqowv3b/9PBEjDGWTarOKRegBNdU9IYJiCqFLuqe8RgcRAQJBAPjRdtD9s2Qwm5TLzPqwifoVYM/7RuXbUrq1zbVp+hafxhjFxXfexjxF6xqyqOI7m3g9o+g4i5xisqn2/Qn8Nz0CQQDVNwb7oo9PbXqKKsp1xBeEkYD/Y2/vQQBg0miT9IiolSX0en8qxvb9WIR1jVVNktEpW6XH4E8hV5/TqXgUatvxAkBMEZ3FnwptIv8tqnDsY3SLZGXIsAWo2DiepF5TjCbNK+OgRzZrw0vPuYB7FQvUvmx1gkLOCBuGoBYHKF+L4fPxAkEAtx1sXN7vD7spm9JGUUAZJpzEWhIvhx6fUYhDkpZYa9i0YTR3VOjOJSVJlZ/NXDM0eb2hMnk93Jfhxynr3DUuMQJAX0oDrPaGZHVZs7gEKremHcM3NTOY2kLOU1WSzaDUv+o8ZJehPs2ip8q2fRu5wer5G9Q70PoyuhwIUYXfo+PO4Q==-----END PRIVATE KEY-----`
// const pspPublicKey = ``
// const prefix="BANKS"

//UAT KEJU PSP TEST
// const pspApiKey = "05c77ef96405de96e28e1cf44ff693b90ac2f1687317257fc106c782b82a2b6a"
// const pspSecret = "9b3f937c28aeec8146c2adc932be22dd821c330708fc7a6faecd2582cfe5edc8"
// const pspPublicKey = ``
// const pspPrivateKey = `-----BEGIN PRIVATE KEY-----MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBANrVxPQJ/gMADJQ/yTc9hMKwZGD0K9IqFhtC0ftgsa2OzJ1XExdjvVrhoVeB2FnjV+tm2DuFBucPkH/8dtsWhiDpZv1umeJFoZoqUXPLKzg4y2Kq7d8xPpk6cfFy/twLI/3frxaCg2JU4Tl079L0NIbsMr4mJd/FhqUdXsTIhy8NAgMBAAECgYEAjdvN1TU1CNTbUq8WzUx/54VZTNB8J71In1ttq7s+8veDBOwRYDQz59okMQnnKj4KHHuK6OqPUvHwBkeu9M9hGnmaRkGyxdi52d+nOlJwoieCq0MlkwMXOpkJ34J+uJ3pJCJa+4a/t1iDpO1gx3/YO9ida6WtxeNpj8uTylM6C4ECQQD1/8635vunL8aUrIBJqOiGoJcIhMytqoNdo4zwvG849hbtdil8/TxUufXszC0DggKNvZB127V7ZnXPKocwwNk1AkEA47tBWHknAGbeNHpM/bHpWlqyJXqCkNJbnZSpg5iG68QsV6E7rxgzfztCwRvhtl6E8T0QjaUVxUWxsmdNxaQReQJAZAiD7TCWgOPioq6K9GklNSm0gRhPiwddqARL2dEmgUlBBYsZT+RCVknQgVx9qYGCvFSrm+GeKPH/UiD/HIovSQJAScHaVjdXBHBMw55g1UIMHDGHxU+6fgFDnvQJOw/pku7EldUoqXsjIrAk3LqVDiXq1N88P0QamvwJo4iFzd9nsQJAA2vUrGyf1/QEDqxmxiYjIFKq2r8BIgK6kPr9i4Lemnx2bUIj5IHbf6gAKgEicCPxYoYm1g2oh1jTJQn9Q1W+ug==-----END PRIVATE KEY-----`
// const prefix="KEJU"

// //SIT bank nusantara
// const pspApiKey = "fd5b53e654a4ea77632f0983af2d3423275f032b67687bd22c16028fe9da0a3c"
// const pspSecret = "779aeb5430084a069997473f92c658b0d5672a1c369afb06e6d048629b82aa2c"
// const pspPrivateKey = `-----BEGIN PRIVATE KEY-----MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIDn/8nEB836dIKfTRTqyR8zJf5QxinyuSZA3uv9fSYJuh0CwBc3mIkvcmrAr3F3da6o8LTv2gTepMVeq6dOEzFWqcP1qL0yCAI9K/7a0ekadVJWw+23xWdE/SKs7RvD1SZ1Gamme6cRFhiDvG0814B3YhQhZJ9TY71rMs0lUrRdAgMBAAECgYARc1bFUaxczhMHu9kLg91GQ/5Yt0acVyeJbi6/c8mFZLu1QbIPco9LwwiSOxOFIM7lnik31WCGWD2mGnLSa1ddnVZ6nZ1T7U91SvW1j6+4coTSdAimv3X20M7kRlCasemjQaQhRdcTACvP3Vl1bj7P4yHLsDRFHmLLh7Zf1yFYYQJBALZUP+Hg8Dj/OKWxGeY2R5Eg6u5L1jrLEm+i0HZaHjcYMRYCR2SC5arzQUcDyC+CPXkUhZH3HkrCGhIT93U2zocCQQC0/cxxRZAvpTiOKO5+ulQkEgKBxZLAtVxBc5EU9jjNeo8D7YSYhrJqjmkX+tCwadw2z1J8CdvoUQUmviBSH5r7AkBbZZgwTmWc7LMku8ZT1FnDslCR64oUJr+zHlaJPVtwGrxgX/wRslwWeaH7SzYKOqs+Cr96D/orV2liLogZRcP5AkEAsFzje7jyUEsqOfSOubRtSxy1jqjsYJYZCLpJNGjdXvS/KW+oFkyizIxqwfAorM7qxAnv8WhV/iH86Ay6R+v+QwJARS+DEhZRXIbd+RgdnlZlBMembiWmZ+XZxlHF+bzi+iDd6mfeW0H0/osX929B9dE+CkHtSn3nPIHSZSoVBDE4ZA==-----END PRIVATE KEY-----`
// const pspPublicKey = ``
// const prefix="BNST"

// UAT bank central Indonesia
// const pspApiKey = "fcb39f42964e75c22997d1ae1ff424e45937798a4e86a0f404758017de20c90f"
// const pspSecret = "d08fa89501903d38b34ea07d202051855d9387a3deebbd328a9e026b093d57c1"
// const pspPrivateKey = `-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQDBMq2hOmXx6I5jz/tH9y+c51+5geuD9v8/QOv/xPNBMhOAZ9vQiEugjDWW6Z3l7pHUPhN0r/NwNtGwOOxKrJZBhGngaRWsx1Lh+8Dm6L5WQhq6Bn7EaIBUBP0O4+JM+AIvog0YqgcQD2hTtCrmPhDvR+ToNwn27MrU/s9hJch59wIDAQABAoGALluIMScvng/E1utparfD23zjScKEbipezeE4n6s1CWBIMKf7JTsHFpN+KmONKUaJBGoOxhGQMs1cnFHUVQi7lrrIbaOe30CiBMg+qZXpeav2wbzBKbK5gRkH/1nV97hK4q3rbpb2xLgskMP1U5o6oNoz4m/PRGRbJX+LwM8HwSECQQD0bR/YDqOw8O0sak5im/E5d+bWTrZmSkrqBCO47ecM3XQmerHax6x5tNPzbKcX+rGj95GHi5A6iT0BE8Tpc1sXAkEAyliTqtzPH/umhL1Dj6YLPwz8sS2laoBFo6sCAqZtc5xvN6ciFICE+5BvNnchLX19qVHgk3tes4A/N4+aAkmkIQJASzIvM8b9MPhN3vYte0TCZ42tpIy+rKV6epgfbUszY8/VZeklQktfkmnBMwhgN45WjD0jtnGHQ5ro+6XbVH66rQJBAMiDE/m6C+ompnFdV8jOgtB9Hx64G/Y4nEm+mSRlJYruFuvwS/5DCQR8sSgozxDUDSUvhLrBAywfRwXY4IWp0eECQBqGHVJwgQMKep7DPpSr5LwnpfZsUpTZK63N0cuYpFt6Np9JnnJLdifAnarEssOFDbzz0OLad3NHMipPAsMGj3U=-----END RSA PRIVATE KEY-----`
// const pspPublicKey = ``
// const prefix="BCII"




//Directory Input
const inputDir = "input/"
const inputDeclined = "inputDecline.json"
const inputChargeback = ""

//Case Variable
const paymentMethod = [
     "WALLET","DEBIT_CARD","CREDIT_CARD",// ,"CURRENT_ACCOUNT","SAVINGS_ACCOUNT","WALLET",
]

const currencyList = [
    "USD",//"AUD","BND","CAD","CHF","DKK","GBP","HKD","IDR","JPY","KRW","MYR","NOK","NZD","PHP","SGD","THB","EUR",
    
]


const bankList = ["BCA","BNI","BRI","MDR","CIMB","DANAMON","BTN"]

const principleList = [ 
    "VISA", "MASTERCARD", //"JCB", "CUP", "AMEX", "GPN"
]//According to response sentinal

//Network Hash Key 
const netHashKey = "KeyTest123" 

const tcArray = [
    {
        classification:"MEDIA_AND_ENTERTAINMENT",
        merchantCountryCode : "US",
        countryCode: "ID",
        currency:"USD",
        mccCode:[5815,4899,7311,7333] //
    },
    {
        classification:"GAMING",
        merchantCountryCode : "US",
        countryCode: "ID",
        currency:"USD",
        mccCode:[5816,7955,7994,7995]
    },
    //    {
    //     classification:"SOFTWARE_AND_SAAS",
    //     merchantCountryCode : "US",
    //     countryCode: "ID",
    //     currency:"USD",
    //     mccCode:[4816,7372,7379]

    // },
    // {//E_COMMERCE non pmse
    //     classification:"E_COMMERCE",
    //     merchantCountryCode : "US",
    //     countryCode: "ID",
    //     currency:"USD",
    //     mccCode:[5311,5964,5965,5966,5967,5968,5969,5933,5399,5732,5734,5735,5817,5818,7399,5691,5641,5999]
    // }
    // ,
    // {//E_COMMERCE non pmse
    //     classification:"TRAVEL_AND_HOSPITALITY",
    //     merchantCountryCode : "US",
    //     countryCode: "ID",
    //     currency:"USD",
    //     mccCode:[4722,4789,4411,4121]
    // }
    // ,
    // {//E_COMMERCE non pmse
    //     classification:"EDUCATION",
    //     merchantCountryCode : "US",
    //     countryCode: "ID",
    //     currency:"USD",
    //     mccCode:[8299,5192]
    // }
    // ,
    // {//E_COMMERCE non pmse
    //     classification:"CRYPTO",
    //     merchantCountryCode : "US",
    //     countryCode: "ID",
    //     currency:"USD",
    //     mccCode:[6051,6211,6540]
    // }
   
]


//Generate Random String
 function generateRandomString(length) {
    const characters = '123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

//Random int
function generateRandomInt(min,max){
      min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Generate HMAC256
function generateHmac256(key, message) {
    console.log("message:", message);
    return CryptoJS.HmacSHA256(message, key).toString()
}


//Random Array
function getRandomElement (arr) {
  if (!arr || arr.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//Download File Function
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
