var express = require('express');
var router = express.Router();
const alumnoModel = require('../models/alumno')

//GET /alumnos
router.get('/', (req, res) => {
    //res.send('Entro en la ruta que me devuelve los alumnos')
    alumnoModel.getAll((err, rows) => {
        res.render('alumnos/main', {
            arrAlumnos: rows
        }) 
    })
    
})

module.exports = router