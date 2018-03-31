const express = require('express')

const app = express()

app.get('/', (request, response) => {
	response.send('OK')
})


app.listen(3240, () => console.log("j'écoute sur le port 3240"))