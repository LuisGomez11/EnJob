// llamamos a la variable app que viene con todo el contenido de express
const app = require('./app/app')
// llamamos a la variable port que viene con nuestro numero puerto
const { port2 } = require('./configs/data');
//llamamos a la variable connect que da inicio a nuestra base de datos
const { connect } = require('./database/database');

// aqui hacemos una funcion asincrona para que el servidor espere a que se complete ciertas funciones
async function main() {
    // seguimos haciendo una llamada a la conccion con la base de datos
    await connect();

    // aqui iniciamos el servidor en el puerto declarado
    await app.listen(port2);
    console.log(`server on port ${port2}`)
    
};
// llamamos a la funcion "main" para que inicie la funcion
main();

