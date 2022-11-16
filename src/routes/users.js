import {Router} from 'express';
const router = Router();

router.get('/users/signin', (_req, res) => {
    res.render('users/signin');
})

router.get('/users/signup', (_req, res) => {
    res.render('users/signup');
})

router.post('/users/signup', (_req, res) => {
    const {name, email, password, confirm_password} = _req.body;
    const errors = [];
    if(password != confirm_password) {
        errors.push({Text: 'Las contraseñas no coinciden'});
    }
    if(password.lenght < 4) {
        errors.push({Text: 'La contrasenia debe tener por lo menos 4 caracteres'});
    }
    if (errors.length > 0 ) {
        res.render(' users/signup ', { errors, name, email, password, confirm_password });
    } else{
        res.send('Ok')
    };
})

export default router;