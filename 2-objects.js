// Object
// grouped DATEN, die zusammengehören
// ähnlich wie CSS Klasse
// nur dass wir DATEN sammeln, nicht styles!
let loginData = {
  email: "rob@rob.rob",
  pw: "rob456", // Secure as hell!
  num: 1000,
};

// einfachste funktion: console.log
// loggt mir Daten ins TERMINAL aus
// konkreter: loggt inhalt von VARIABLEN ins TERMINAL
console.log(loginData.email);
console.log(loginData.pw);

// prüfe contents => VALIDATION
// FUNKTION von Javascript nehmen zum überprüfen von Content
const checkEmail = loginData.email.includes("@");
console.log(checkEmail);

const checkPw = loginData.pw.length > 8; // berechne etwas und speicher ERGEBNIS es in der Variablen checkPw
console.log(checkPw);
