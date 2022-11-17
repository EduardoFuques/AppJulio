import mongoose from 'mongoose';
import moongose from 'mongoose';
//const {Schema} = moongose;
//const model = Model();

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    date: { type: Date, default: Date.now}
});

export const Models = moongose.model('Note',NoteSchema);