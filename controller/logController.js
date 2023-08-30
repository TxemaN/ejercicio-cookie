
const { generarJWT } = require('../helpers/jwt');

const pantallaBoton = async (req, res) => {



    res.render("hacerclick.ejs")

}

const login = async (req, res) => {

   
    const token = await generarJWT();
 
        res.cookie('tokenEjercicio', token, {
            maxAge: 30000,
            httpOnly: true,
        });
        res.render("hacerclick.ejs")

}


module.exports = {

    pantallaBoton,
    login
}