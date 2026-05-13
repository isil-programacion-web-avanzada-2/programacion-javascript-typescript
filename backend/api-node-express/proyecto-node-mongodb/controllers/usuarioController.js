const Usuario = require('../models/Usuario');


exports.createUsuario = async(req, res) =>{

    try {
        const nuevo = await Usuario.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.listarUsuarios = async(req,res) =>{
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    
    }
}

exports.actualizarUsuario = async(req,res) =>{
    try {
        const actualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
    } catch (error) {
         res.status(400).json({
            error: error.message
        });
    }
}


exports.eliminarUsuario = async (req, res)=>{
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({mensaje: "Usuario eliminado"});
    } catch (error) {
         res.status(400).json({
            error: error.message
        });
    }
}