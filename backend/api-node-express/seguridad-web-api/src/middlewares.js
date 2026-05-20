import jwt from "jsonwebtoken";

export function verificarToken(req,res,next){

    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({msg: "Acceso denegado, por que no hay token"});
    }


    try {
        const usuario = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = usuario;
        next();
    } catch (error) {
        return res.status(403).json({msg: "Token invalido o expirado"});
    }
}


export function permitirRoles(... permitirRoles){
    return (req,res,next) =>{
        const rolUsuario = req.usuario?.rol;

        if(!permitirRoles.includes(rolUsuario)){
            return res.status(403).json({
                msg: "No tienes permisos para acceder a esta ruta"
            });
        }

        next();
    }
}