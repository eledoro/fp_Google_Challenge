const server = require('./server')
const port = 3000;

server.listen(port, () => console.log(`Google is running on http://localhost:${port}`))