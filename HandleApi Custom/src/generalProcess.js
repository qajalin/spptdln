let buttonStart = document.getElementById('start');
let buttonStartVerify = document.getElementById('startVerify');

buttonStart.addEventListener('click', function() {
    generateToken().then(()=>{
        chargeBackTest()
    })
});

buttonStartVerify.addEventListener('click', function() {
    console.log("xx")
    generateToken().then(()=>{
        verifyTransaction()
    })  
});
