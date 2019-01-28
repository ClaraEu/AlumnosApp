var express = require('express');
var router = express.Router();

const cursoModel = require('../../models/curso');

router.get('/', (req, res) => {
    cursoModel.getAll((err, rows) => {
        if (err) return res.json({ error: err.message })
        res.json(rows)
    })
})

 router.get('/:idCurso', (req, res) => {
     cursoModel.getById((err, rows) => {
         if (rows.length === 0) {
             res.json({error: 'No existe'})
         } else {
             res.json(rows[0])
         }
     })
    
})



module.exports = router