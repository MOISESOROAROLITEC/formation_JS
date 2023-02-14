console.log("je suis dans le js");
let promise = new Promise((resolue, echoue) => {
	let etat = Math.random() < .5
	console.log("l'etat est : ", etat);
	setTimeout(() => etat ? resolue("OUI") : echoue("NON"), 3000)

}).then(response => {
	// console.log("la reponse est : ", response);
	return "la reponse est : OUI";
})
	.catch(error => {
		// console.log("L'erreur est : ", error);
		return "L'erreur est : NON"
	})

let timeout = new Promise((resolve) => setTimeout(() => resolve('Le chargement a pris trop de temps'), 2000))

Promise.race([promise, timeout]).then(res => console.log("le resultat final est : ", res))

console.log("Fin du programme");