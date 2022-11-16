import pkg from 'mongoose';
const { connect} = pkg
connect("mongodb://julio:Julio2022@172.27.2.249:27017/appj",{
    useNewUrlParser: true
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));