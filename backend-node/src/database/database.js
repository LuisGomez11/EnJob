// llamamos a la libreria mongoose para usar sus modulos he iniciar una coneccion
const mongoose = require('mongoose');
// llamamos a las variables "mongo" que vienen con nuestro uri de coneccion
const {mongo_uri} = require('../configs/data')

// creamos la fucion "connect" que nos da la coneccion
async function connect(){
    // hacemos uso de mongoose para conectar la base de datos
    await mongoose.connect(mongo_uri,
    {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true, })
    
    console.log('Database: connected');
    
};
// exportamos la coneccion para ser usada
module.exports = {connect};