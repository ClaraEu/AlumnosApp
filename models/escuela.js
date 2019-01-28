const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT * FROM colegios', (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

exports.getById = (idEscuela, done) => {
    db.get().query('SELECT * FROM colegios WHERE id=?', [idEscuela], (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}