// property: value
let email = "rob@rob.rob";
let pw = "rob456" // Secure as hell!
let num = 1000

// einfachste funktion: console.log
// loggt mir Daten ins TERMINAL aus
// konkreter: loggt inhalt von VARIABLEN ins TERMINAL
console.log(email)
console.log(pw)

// prüfe contents => VALIDATION
// FUNKTION von Javascript nehmen zum überprüfen von Content
const checkEmail = email.includes("@")
console.log(checkEmail)

const checkPw = pw.length > 8 // berechne etwas und speicher ERGEBNIS es in der Variablen checkPw
console.log(checkPw)


