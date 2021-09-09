const app = require('./server');
const port = 3000;

app.listen(port, () => console.log(`Google is running on http://localhost:${port}`))