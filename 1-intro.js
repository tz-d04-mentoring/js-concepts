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
console.log(checkEmail) // gibt "true" aus, also "wahr" => das heißt, @ ist in der Variable "email" enthalten. Wenn es nicht enthalten ist, ergibt der Check "false"

const checkPw = pw.length > 8 // berechne etwas und speicher ERGEBNIS in der Variablen checkPw
console.log(checkPw)


