class Boulanger {
	constructor(nom) {
		this.nom = nom;
		this.fabrication = Array()
	}
	fabrique(typeBaguette, nombreBoguette = 0) {
		this.fabrication.push({ type: typeBaguette.nom, nbr: nombreBoguette })
	}
	bilan() {
		// console.log(this.fabrication);
		console.log("Le bilan de ", this.nom, " est : ");
		this.fabrication.forEach(e => {
			console.log("    ", e.type, " : ", e.nbr);
		})
	}
}