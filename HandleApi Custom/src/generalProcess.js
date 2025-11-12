let buttonStart = document.getElementById('start');
let buttonStartDecline = document.getElementById('startDecline');
let buttonStartVerify = document.getElementById('startVerify');

buttonStart.addEventListener('click', function() {
    generateToken().then(()=>{
        chargeBackTest()
    })
});
buttonStartDecline.addEventListener('click', function() {
    generateToken().then(()=>{
        decline()
    })
});
buttonStartVerify.addEventListener('click', function() {
    generateToken().then(()=>{
        verifyTransaction()
    })  
});
