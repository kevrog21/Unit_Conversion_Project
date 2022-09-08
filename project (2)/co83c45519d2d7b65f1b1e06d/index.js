

let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

function convert() {
    let inputEl = document.getElementById("entry-txt").value
    
    let lengthFeet = inputEl * 3.281
    lengthFeet = Math.round(lengthFeet * 1000) / 1000
    let lengthMeters = inputEl / 3.281
   lengthMeters = Math.round(lengthMeters * 1000) / 1000
    
    let volumeLiters = inputEl / .2641722
    volumeLiters = Math.round(volumeLiters * 1000) / 1000
    let volumeGallons = inputEl * .2641722
    volumeGallons = Math.round(volumeGallons * 1000) / 1000
    
    let massKilos = inputEl / 2.205
    massKilos = Math.round(massKilos * 1000) / 1000
    let massPounds = inputEl * 2.205
    massPounds = Math.round(massPounds * 1000) / 1000
    
    lengthResult.textContent = inputEl.innerHTML + " meters = " + lengthFeet + " feet | " + inputEl.innerHTML + " feet = " + lengthMeters + " meters"
    volumeResult.textContent = inputEl.innerHTML + " liters = " + volumeGallons + " gallons | " + inputEl.innerHTML + " gallons = " + volumeLiters + " liters"
    massResult.textContent = inputEl.innerHTML + " kilos = " + massPounds + " pounds | " + inputEl.innerHTML + " pounds = " + massKilos + " kilos"
    
}



