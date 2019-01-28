const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT * FROM cursos', (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

exports.getById = (idCurso, done) => {
    db.get().query('SELECT * FROM cursos WHERE id=?', [idCurso], (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}