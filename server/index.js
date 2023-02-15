// MERN 

// Development = Node.js server + React server

// MEN

// E = Express


const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(2500, () => {
    console.log('Server Running Port 2500')
})