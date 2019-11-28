const app = require('./app/app');
const {port2} = require('./config/data');
const { connect } = require('./database/database');

async function main() {
    //staring database
    await connect();

    //staring server
    const server = app.listen(port2);
    require('./controller/socket.controller').SocketConfig(server);
    console.log(`server on port ${port2}`)
}

main();