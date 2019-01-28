var express = require('express');
var router = express.Router();

const alumnoModel = require('../../models/alumno')

// GET http://localhost:3000/api/alumnos/
// GET /api/alumnos/
router.get('/', (req, res) => {
    alumnoModel.getAll((err, rows) => {
        if(err) return res.json({ error: err.message })
        res.json(rows)
    })
})

//DELETE /api/alumnos/3

//PUT PATCH /api/alumnos/3
//UPDATE alumnos SET nombre=""... WHERE id=req.params.idUser

//GET /api/alumnos/3
router.get('/:idUser', (req, res) => {
    alumnoModel.getById(req.params.idUser, (err, rows) => {
        if (rows.length === 0) {
            res.json({error: 'El id del alumno no existe'})
        } else {
            res.json(rows[0])
        }
    })
})

//POST /api/alumnos
router.post('/', (req, res) => {
    console.log(req.body);
    alumnoModel.insert(req.body, (err, result) => {
        console.log(result)
        if (err) return res.json({ error: err.message })
        alumnoModel.getById(result.insertId, (err, rows) => {
            res.json(rows[0])
        })
    })
})
module.exports = router