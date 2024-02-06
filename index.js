let lengthResult = document.getElementById("length-result")
//console.log(lengthResult)
let volumeResult = document.getElementById("volume-result")
//console.log(volumeResult)
let massResult = document.getElementById("mass-result")
//console.log(massResult)

let convertBtn= document.getElementById("convert-btn")
let userInput = document.getElementById("unit-input")



convertBtn.addEventListener("click", getInputandConv) 

function getInputandConv() {
    let inputNum=Number(userInput.value)
    let inputNumDec=inputNum.toFixed(3)
    let finalInputNum=Number(inputNumDec)
   
    lengthConv()
    volumeConv()
    massConv()
   

    function lengthConv () {
        lengthResult.textContent = `${finalInputNum} meters = ${(finalInputNum * 3.281).toFixed(3)} feet | 
        ${finalInputNum} feet = ${(finalInputNum/3.281).toFixed(3)} meters`

    }

    function volumeConv () {
        massResult.textContent = `${finalInputNum} kilos = ${(finalInputNum*2.204).toFixed(3)} pounds | 
        ${finalInputNum} pounds = ${(finalInputNum/2.204).toFixed(3)} kilos`
        
    }

    function massConv () {
        volumeResult.textContent = `${finalInputNum} liters = ${(finalInputNum*0.264).toFixed(3)} gallons | 
        ${finalInputNum} gallons = ${(finalInputNum/0.264).toFixed(3)} liters`
        
     }
   
    
    }



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
