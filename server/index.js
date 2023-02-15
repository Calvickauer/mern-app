// MERN 

// Development = Node.js server + React server

// MEN

// E = Express


const express = require('express');
const app = express();

app.get('/api/register', (req, res) => {
    res.send('Hello World!')
    console.log(req.body)
})

app.listen(2500, () => {
    console.log('Server Running Port 2500')
})