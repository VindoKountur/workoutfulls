const express = require('express');
const cors = require('cors');

const personal = require('./routers/personal');
const heroes = require('./routers/heroes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/personal', personal);
app.use('/heroes', heroes);

app.listen(5000, console.log('app running on http://localhost:5000'));
