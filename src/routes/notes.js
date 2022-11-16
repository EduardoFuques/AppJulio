import {Router} from 'express';
const router = Router();

router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});

router.post('/notes/new-notes', (req, res) => {
    console.log(req.body);
    res.send('ok');
});


router.get('/notes', (_req, res) => {
    res.send('Notas de la DB');
});

export default router;