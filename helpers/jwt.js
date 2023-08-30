const jwt = require('jsonwebtoken');

const generarJWT = (nombre) => {

    return new Promise((resolve, reject) => {

        const payload = { nombre };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('Fallo al generar token');
                };

                resolve(token);
                console.log(token)
            });
    });

};

module.exports = {
    generarJWT
};