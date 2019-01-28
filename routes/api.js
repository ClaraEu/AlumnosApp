var express = require('express');
var router = express.Router();

const alumnosApiRouter = require('./api/alumnos')
const escuelasApiRouter = require('./api/escuelas')
const cursosApiRouter = require('./api/cursos')

router.use('/alumnos', alumnosApiRouter)
router.use('/escuelas', escuelasApiRouter)
router.use('/cursos', cursosApiRouter)

module.exports = router