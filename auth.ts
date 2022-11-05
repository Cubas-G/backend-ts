import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// autenticar == login
// autorizar == verificar permisos middleware

(async () => {
    // register hash contraseñas input 123 -> $2b$05$1BCssJS9aCGB3hNEqFGEdONC0vkomHkKHs.zQaZ9UUxPLYPxtBTSW
    const encryptPassword = async () => {
        const hashedPassword = await bcrypt.hash('123', 5);
        return hashedPassword;
    }

    const hashedPassword = await encryptPassword();
    console.log('Guardando contraseña hasheada en la base de datos', hashedPassword);


    // login 123 -> verificar contra el hash guardado
    const passwordAreEquals = await bcrypt.compare('123', hashedPassword)
    console.log(passwordAreEquals);


    // regresa un token lkfjhefae98sdf0g.jisdfgsdlfgsd9.sedfgdsf
    const payload = {
        id: 1,
        role: 'admin',
        password: '213123123',
        deparment: 'support',
        permissions: []
    }
    const secretKey = 'ultra_secreto';
    const token = jwt.sign(payload, secretKey);
    console.log(token);


    // verificar token
    const tokenDecoded = jwt.verify(token, secretKey)
    console.log('token decoded', tokenDecoded);


})()












// middleware -> next()
// no está autenticado -> login

