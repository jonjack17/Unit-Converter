let lengthResult = document.getElementById("length-result")
//console.log(lengthResult)
let volumeResult = document.getElementById("volume-result")
//console.log(volumeResult)
let massResult = document.getElementById("mass-result")
//console.log(massResult)

let convertBtn= document.getElementById("convert-btn")
let userInput = document.getElementById("unit-input")



convertBtn.addEventListener("click", function() {
    let inputNumber=Number(userInput.value)
    console.log(inputNumber*3)
    //lengthResult.innerHTML = `${userInputNumber)} meters `
})

//bababa