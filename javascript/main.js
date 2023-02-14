"use strict"

let soro = new Boulanger("SORO COLOTCHOLOMAN");
let pain_au_lait = new Produit("Pain au lait");
let pain_au_cocolat = new Produit("Pain au cocolat");
let pain_au_sucre = new Produit("Pain au sucré");

soro.fabrique(pain_au_cocolat, 50);
soro.fabrique(pain_au_lait, 10);
soro.fabrique(pain_au_sucre, 30);
[1, 5, 8, 50, 9].forEach(function (e) { e }, this)
// console.log(soro.fabrication); 
soro.bilan()
// setTimeout(() => {
// 	console.log("Retardée d'une seconde.");
// }, 3000)
// function toto() {
// 	console.log('toto a été appelée');

// }
// setTimeout(toto, 0);
// console.log('Après setTimeout()');