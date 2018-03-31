const http = require('http')

const server = http.createServer((request, response) => {
	console.log("j'ai une requete yey", request.url)
	response.end('OK')
})

server.listen(3240, () => console.log("j'écoute sur le port 3240"))