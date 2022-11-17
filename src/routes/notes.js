import {Router} from 'express';
import {Models} from '../models/Note.js'
const router = Router();
var Note = Models();

router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});

router.post('/notes/new-notes', async (_req, res) => {
    const {title, description}=_req.body;
    const errors =[];
    if(!title) {
        errors.push({text: 'Falta el título'});
    }
    if(!description){
        errors.push({text: 'Falta la descripción'});
    }
    if(errors.length > 0){
        res.render('notes/new-notes', {
            errors,
            title,
            description
        });
         console.log("los errores son:", errors);
         console.log("el título es:", title);
         console.log("la descripción es:", description);
    } else {
        const newNote = new Models({ title, description });
        console.log(newNote);
        await newNote.save();
        res.redirect('/notes')
    }
    
});


router.get('/notes', async (_req, res) => {
    const notes = await Models.find().lean().sort({date: 'desc'});
    res.render('notes/all-notes', {notes})
});

router.get('/notes/edit/:id', async (_req, res) => {
    const note = await Note.findByPk(_req.params.id)
    res.render('notes/edit-note', {note});
});

export default router;