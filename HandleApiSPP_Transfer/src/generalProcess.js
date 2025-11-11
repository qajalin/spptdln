let buttonStart = document.getElementById('start');
let buttonStartDecline = document.getElementById('startDecline');

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