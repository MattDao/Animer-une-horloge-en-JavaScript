// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

let temps = new Date();

//Stocker l'heure , minute , seconde  dans des varaiables

let heures = ((temps.getHours() + 11) % 12) + 1;
console.log(heures);
let minutes = temps.getMinutes();
let secondes = temps.getSeconds();

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let heure = 0.00833;
let minute = 0.1;
let seconde = 6;

let sec = secondes * seconde;
let hre = heures * heure * 3600 + heure * 60 * minutes;
let min = minutes * minute * 60;

AIGUILLEHR.style.transform += `rotate(${hre}deg)`;
AIGUILLEMIN.style.transform += `rotate(${min}deg)`;
AIGUILLESEC.style.transform += `rotate(${sec}deg)`;

// Déplacer les aiguilles

function demarrerLaMontre() {
  AIGUILLEHR.style.transform += `rotate(${heure}deg)`;
  AIGUILLEMIN.style.transform += `rotate(${minute}deg)`;
  AIGUILLESEC.style.transform += `rotate(${seconde}deg)`;
}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
