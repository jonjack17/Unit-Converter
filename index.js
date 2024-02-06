let lengthResult = document.getElementById("length-result")
//console.log(lengthResult)
let volumeResult = document.getElementById("volume-result")
//console.log(volumeResult)
let massResult = document.getElementById("mass-result")
//console.log(massResult)

let convertBtn= document.getElementById("convert-btn")
let userInput = document.getElementById("unit-input")



convertBtn.addEventListener("click", length) 

function length() {
    let inputNumber=Number(userInput.value)
    let inputNumberDec=inputNumber.toFixed(2)
    let inputNumberDecNumber=Number(inputNumberDec)

    console.log(inputNumberDec)
    lengthResult.innerHTML = `${inputNumberDec} meters = ${inputNumberDec*3.281} feet`
}




/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//setInterval(function() {document.body.style.backgroundColor = "rgba(" + (256 * Math.random()) + "," + (256 * Math.random()) + "," + (256 * Math.random()) + "," + Math.random() + ")"}, 200)