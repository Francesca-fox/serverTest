const express = require('express')
const mem1 = require('../mock/member/member1.json')
const mem2 = require('../mock/member/member2.json')

const mem = [ mem1, mem2]
console.log(mem)

const app = express()

app.get('/', (request, response) => {
	response.send('OK')
})


app.listen(3240, () => console.log("j'écoute sur le port 3240"))