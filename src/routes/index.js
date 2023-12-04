// const { Router } = require('express');
const express = require('express')
const router = express.Router();

//!!! This is where: server.use('/pokemon', routes) from app.js is being imported into !!!//


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getByID = require('../controllers/getByID')




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/getID/:id', getByID);


module.exports = router;
