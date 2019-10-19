var exp = require('express');
const app = exp()
const port = 3000
const dir = __dirname;
app.get('/', (req, res) => res.sendFile(dir + 'src/index.js'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))