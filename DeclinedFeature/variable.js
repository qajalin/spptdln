//SIT API
let baseURL = "https://sentinal-api-dev-749998763474.asia-southeast2.run.app"



//GeneralVar
let adminToken = ""
// let clientApiKey = ""
// let clientSecret = ""

//RSA 1
const pspApiKey = "5c841251dbb2dce84dca4f5d43af01e855448ab9b182d66576059b3f3f53a023"
const pspSecret = "7677b42de58f3feec7b6a1f419db3dc53087863b6c6a7d80897482bb87fb88f6"
const pspPrivateKey = `-----BEGIN PRIVATE KEY-----MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAM87w6XmJQAmll4I2kL9teJPnypFLrc4yi66L05mqcs5DbR7JdFghnqRfbeELFQE/fybQLcvjOh5MJxW6nF0merdiv0jEJzTRmeZ3HMaUj+Bt0TmlKHllbHESfq1lccGdDBuEknHt2z6Z3Oy6i5ezoHJlSWUJC4/jTrR/BjM8y9tAgMBAAECgYBs47ZWAawHfD8eggBNmwprM/MqPtfhJlH2Y5Zf18n4Iq502xBwCAwhczlfqG+yZj0e8mT63F1p+eP1AiaGHwKQV7n2NvEqKeBDkBQfbA4q7Ok7aALI1QsxFfNaxpHzqowv3b/9PBEjDGWTarOKRegBNdU9IYJiCqFLuqe8RgcRAQJBAPjRdtD9s2Qwm5TLzPqwifoVYM/7RuXbUrq1zbVp+hafxhjFxXfexjxF6xqyqOI7m3g9o+g4i5xisqn2/Qn8Nz0CQQDVNwb7oo9PbXqKKsp1xBeEkYD/Y2/vQQBg0miT9IiolSX0en8qxvb9WIR1jVVNktEpW6XH4E8hV5/TqXgUatvxAkBMEZ3FnwptIv8tqnDsY3SLZGXIsAWo2DiepF5TjCbNK+OgRzZrw0vPuYB7FQvUvmx1gkLOCBuGoBYHKF+L4fPxAkEAtx1sXN7vD7spm9JGUUAZJpzEWhIvhx6fUYhDkpZYa9i0YTR3VOjOJSVJlZ/NXDM0eb2hMnk93Jfhxynr3DUuMQJAX0oDrPaGZHVZs7gEKremHcM3NTOY2kLOU1WSzaDUv+o8ZJehPs2ip8q2fRu5wer5G9Q70PoyuhwIUYXfo+PO4Q==-----END PRIVATE KEY-----`
const pspPublicKey = ``


//Directory Input
const inputDir = "input/"
const inputDeclined = "inputDecline.json"
const inputChargeback = "inputDecline.json"





//Generate Random String
 function generateRandomString(length) {
    const characters = '0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
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

//Config Header
function headerRequest (data,payloadRequest,path) {
    const timestamp = moment().add(-1,"seconds").format('YYYY-MM-DDTHH:mm:ss.SSSZ')
    const local_hashedBody = CryptoJS.SHA256(JSON.stringify(payloadRequest)).toString().toString().toLowerCase()
    const local_stringToSign = `POST:${path}:${adminToken}:${local_hashedBody}:${timestamp}`;
    const local_signature = CryptoJS.HmacSHA256(local_stringToSign, pspSecret). toString().toLowerCase();
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`,
        'X-TIMESTAMP':timestamp,
        'X-SIGNATURE':local_signature,
        'X-PARTNER-ID':pspApiKey,
        'X-MERCHANT-KEY':data.register.response.body.content.apiKey
    }
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



// 3. FUNGSI UNTUK MENDOWNLOAD
        function downloadCSV(data, filename = "download.csv") {
            // Konversi data ke format string CSV
            const csvContent = convertToCSV(data);
            
            // Buat Blob (file di memori)
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            
            // Buat URL untuk Blob
            const url = URL.createObjectURL(blob);
            
            // Buat elemen link <a> sementara
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            
            // Sembunyikan link dan tambahkan ke body
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            
            // Klik link secara programatis untuk memulai download
            link.click();
            
            // Hapus link dari body setelah di-klik
            document.body.removeChild(link);
        }





function convertSimpleArrayToCSV(data, columnHeader = "Values") {
            // Helper function untuk escape karakter khusus
            const escapeCell = (cell) => {
                let str = cell === null || cell === undefined ? "" : cell.toString();
                if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                    // Bungkus dengan kutip dua dan escape kutip dua di dalamnya
                    str = '"' + str.replace(/"/g, '""') + '"';
                }
                return str;
            };

            // Buat baris header (kita tentukan sendiri, misal "Values")
            const headerRow = escapeCell(columnHeader);

            // Buat baris data, setiap item di-escape
            const dataRows = data.map(item => escapeCell(item));

            // Gabungkan header dan data, dipisahkan oleh baris baru
            return [...dataRows].join('\n');
        }

        // 3. FUNGSI UNTUK MENDOWNLOAD (SAMA SEPERTI SEBELUMNYA)
function downloadCSV(csvContent, filename = "download.csv") {
            // Buat Blob (file di memori)
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            
            // Buat URL untuk Blob
            const url = URL.createObjectURL(blob);
            
            // Buat elemen link <a> sementara
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            
            // Sembunyikan link dan tambahkan ke body
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            
            // Klik link secara programatis untuk memulai download
            link.click();
            
            // Hapus link dari body setelah di-klik
            document.body.removeChild(link);
        }

        // 4. EVENT LISTENER UNTUK TOMBOL
        document.getElementById('downloadBtn').addEventListener('click', () => {
            console.log("Memicu download...");
            
            // Panggil fungsi konversi yang baru
            const csvString = convertSimpleArrayToCSV(simpleArray, 'Daftar Data');
            
            // Panggil fungsi download
            downloadCSV(csvString, 'list_data.csv');
        });









