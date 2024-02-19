const nome = prompt('Scrivi il tuo nome');

const cognome = prompt('Scrivi il tuo cognome');

const favColor = prompt("Scrivi il tuo colore preferito");

let psswrd = nome + cognome + favColor + "24";

document.getElementById('pswrd-assign').innerHTML = 
` <p>La tua password è ${psswrd} </p> ;`

console.log(psswrd);
