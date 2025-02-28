// Ich will mit ALLEN Elemente in der Liste etwas machen
let pizzas = [
  {
    name: "Hot Dog",
    price: 7.99,
  },
  {
    name: "Hawaii",
    price: 5.99,
  },
  {
    name: "Tuna",
    price: 4.99,
  },
  {
    name: "Margerita",
    price: 3.99,
  },
  {
    name: "Salami",
    price: 5.99,
  },
];

// LOOP Beispiel => verarbeite ganze Liste mit gleichem Code auf einmal
// wandel Listen Elemente in HTML um
pizzas.map((pizza) => {
  console.log("<div>" + pizza.name + "</div>")
})


// OHNE Loop
// Großes Problem, weil wir dann bei großen Listen 
// SEHR SEHR SEHR VIEL Code brauchen um jedes Item upzudaten
console.log("<div>" + pizzas[0].name + "</div>")
console.log("<div>" + pizzas[1].name + "</div>")
console.log("<div>" + pizzas[2].name + "</div>")
console.log("<div>" + pizzas[3].name + "</div>")
console.log("<div>" + pizzas[4].name + "</div>")