import pkg from 'mongoose';
const { connect} = pkg
import { DB_CONNECT } from './server.js'

connect("mongodb://julio:Julio2022@172.27.2.249:27017/appj",{
    useNewUrlParser: true
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));