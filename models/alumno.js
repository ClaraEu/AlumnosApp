const db = require('../db')

exports.getAll = (done) => {
    db.get().query('SELECT * FROM alumnos', (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

exports.getById = (idUser, done) => {
    db.get().query('SELECT * FROM alumnos WHERE id=?', [idUser], (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

exports.insert = ( {nombre, matricula, email, nota_media, edad, fecha_nacimiento, sexo, fk_escuelas},done) => {
    db.get().query('INSERT INTO alumnos VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, matricula, email, parseInt(nota_media), parseInt(edad), fecha_nacimiento, sexo, parseInt(fk_escuelas)], (err, result) => {
        if (err) return done(err, null)
        done(null, result)
    })
}