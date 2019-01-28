var express = require('express');
var router = express.Router();

const escuelasModel = require('../../models/escuela')

router.get('/', (req, res) => {
    escuelasModel.getAll((err, rows) => {
        if(err) return res.json({ error: err.message })
        res.json(rows)
    })
})

router.get('/:idEscuela', (req, res) => {
    escuelasModel.getById(req.params.idEscuela, (err, rows) => {
        if (rows.length === 0) {
            res.json({error: 'La escuela no existe'})
        } else {
            res.json(rows[0])
        }
    })
})

module.exports = router