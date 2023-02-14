"use strict"
class Voiture {
	static nbr = 0;
	constructor(marque, couleur, prix) {
		this.marque = marque;
		this.couleur = couleur;
		this.prix = prix;
		Voiture.nbr += 1;
	}
	get getPrix() {
		return this.prix;
	}
	set setPrix(nprix) {
		this.prix = nprix;
	}
	get getMarque() {
		return "La marque de la voiture est : " + this.marque;
	}
	set setMarque(marque) {
		this.marque = marque;
	}
	static getNbrVoiture() {
		return this.nbr;
	}

}
class Bus extends Voiture {
	constructor(marque, couleur, prix, nbrPlace) {
		super(marque, couleur, prix);
		this.nbrPlace = nbrPlace;
	}
	get getNbrPlace() {
		return "Le nombre de place est : " + this.nbrPlace;
	}
	set setNbrPlace(nbr) {
		this.nbrPlace = nbr;
	}
}
const voiture = new Voiture("mercedes", "rouge", 500000);
console.log(voiture);
const bus = new Bus("volvagen", "black", 6000, 500);
console.log(bus.getNbrPlace)
bus.setNbrPlace = 100
console.log(bus.getNbrPlace)
console.log("Le nombre de voiture cree est : ", Voiture.getNbrVoiture());