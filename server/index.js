const http = require('http').createServer()


const socket = require('socket.io')

const PORT = 3030
const io = socket(http, {
    cors: {origin: '*'}
})
http.listen(PORT, () => {
    console.log('Listening on http://localhost:' + PORT)
})


io.on('connection', socket => {
    console.log('connected client', socket.id)

    socket.on('message', data => {
        // console.log('got message from client ', socket.id)
        // socket.send('thanks for message')
        io.emit('message', `${socket.id} says: ${data}`)
    })


    socket.on('disconnecting', reason => {
        console.log(socket.id, ' client disconnected')
    })
})


// const ws = require('ws')


// const wss = new WebSocket('ws')