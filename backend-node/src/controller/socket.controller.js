exports.SocketConfig = server => {
    const SocketIO = require('socket.io');
    const Io = SocketIO(server);
    Io.on('connect', (socket) => {
        //Join in conversations
        socket.on('Room:Join', room => {
            socket.join(room);
        });

        //new message
        socket.on('Chat:Message', (data) => {
            socket.broadcast.to(data.Room).emit('Chat:Message', data);
        });

        //for new conversations
        socket.on('Chat:Room', (data) => {
            socket.broadcast.emit('Chat:Room', data);
        });

        //user typing 
        socket.on('Chat:Typing', (data) => {
            socket.broadcast.to(data.Room).emit('Chat:Typing', data);
        });
    });
}