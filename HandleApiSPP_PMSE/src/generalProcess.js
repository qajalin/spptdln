let buttonStart = document.getElementById('start');

buttonStart.addEventListener('click', function() {
    generateToken().then(()=>{
        chargeBackTest()
    })
});