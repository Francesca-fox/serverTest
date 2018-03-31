fetch('http://localhost:3240/mem')
	.then(respose => response.json())
	.then (mem => {

		console.log(mem)
	})

// on veut luire dire qu'il aille sur l'autre canal 3240
// car sinon celui du serve client est sur 5000
// donc 2 sites diff
// quand je fais un fetch , on lui passe une callback qui 
// une callback, plusieurs eth dans la resposne pour comment
// recup ce fichier
// seconde .then = ma donnée que je vais afficher