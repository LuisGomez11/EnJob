const app = require('./app/app');
const {port2} = require('./config/data');
const { connect } = require('./database/database');


async function main() {
    //staring database
    await connect();

    //staring server
    await app.listen(port2);
    console.log(`server on port ${port2}`)
}

main();