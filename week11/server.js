const express = require('express');

const app = express();
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const path = require('path');


const PORT = process.env.PORT || 3001;


// web -- serve htmls
app.use(express.static('public'));

app.use(express.json()); // json
app.use(express.urlencoded({extended: true})); // form data

app.use(webRoutes);
// api -- serve json
app.use('/api', apiRoutes);


app.get('*', (req, res) => {
    console.log('aaaa')
    const html404 = path.join(__dirname, 'public', '404.html')
    res.sendFile(html404);
})


app.listen(PORT, () => {
    console.log(`APP is running on http://localhost:${PORT}`);
})


