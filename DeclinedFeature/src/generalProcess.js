let buttonStart = document.getElementById('startChargeback');
let buttonStartDecline = document.getElementById('startDecline');


buttonStart.addEventListener('click', function() {
    generateToken().then(()=>{
        readFile("chargeback")
    })
   
});
buttonStartDecline.addEventListener('click', function() {
    generateToken().then(()=>{
        readFile("decline")
    })
    
});
