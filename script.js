const inputNum = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
const lengthUnit = document.getElementById("length")
const volumeUnit = document.getElementById("volume")
const massUnit = document.getElementById("mass")

convertBtn.addEventListener("click", function () {
    convert();
});

function convert() {
    const inputValue = parseFloat(inputNum.value);
    
    // Convert meters to feet
    const metersToFeet = (inputValue * 3.28084).toFixed(3);
    const metersToFeetResult = `${inputValue} meters = ${metersToFeet} feet`;
    // Convert feet to meters
    const feetToMeters = (inputValue / 3.28084).toFixed(3);
    const feetToMetersResult = `${inputValue} feet = ${feetToMeters} meters`;
    // Update the result elements
    lengthUnit.textContent = `${metersToFeetResult} | ${feetToMetersResult}`

    // Convert liters to gallons
    const litersToGallons = (inputValue * 0.264172).toFixed(3);
    const litersToGallonsResult = `${inputValue} liters = ${litersToGallons} gallons`;
    // Convert gallons to liters
    const gallonsToLiters = (inputValue / 0.264172).toFixed(3);
    const gallonsToLitersResult = `${inputValue} gallons = ${gallonsToLiters} liters`
    // Update the result elements
    volumeUnit.textContent = `${litersToGallonsResult} | ${gallonsToLitersResult}`
    
    // Convert Kilograms to pounds
    const kilogramsToPounds = (inputValue * 2.20462).toFixed(3);
    const kilogramsToPoundsResult = `${inputValue} kilograms = ${kilogramsToPounds} pounds`;
    // Convert pounds to kilograms
    const poundsToKilograms = (inputValue / 2.20462).toFixed(3);
    const poundsToKilogramsResult = `${inputValue} pounds = ${poundsToKilograms} kilograms`
    // Update the result elements
    massUnit.textContent = `${kilogramsToPoundsResult} | ${poundsToKilogramsResult}`
}