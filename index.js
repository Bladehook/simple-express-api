import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);


app.get('/', (req, res) => {
  res.send('Use route /users')
});

app.listen(PORT, () => console.log(`Listening on http://159.69.37.12:${PORT}`))