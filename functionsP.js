// function practice
function logMessage(message){
    console.log('message')
}
const myMessage = 'Hello World'
logMessage(myMessage)

function sayGreeting(){
    console.log('Hello Class')
}
sayGreeting()

//functions with returns
function calcTax(total, taxRate){
    const tax = total * taxRate
        return tax
}
let myTax = calcTax(17.25, 0.07)

// return outside temp
function outsideTemp (temperature){
    if(temperature>100){
        console.log('its hot')
    } else {
        console.log('its cold')
    }
}
let outsideTemperature = 120
outsideTemp(outsideTemperature)