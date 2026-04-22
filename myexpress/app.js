import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/hi', (req, res) => {
  res.send('Hello World!');
});
app.get('/endfield', (req, res) => {
  res.send('gugugaga');
});
app.get('/json', (req, res) => {
	res.json(
		{ 
			id: 1, 
			name: "Catcher in the Rye" 
		}
)});
app.get('/image', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, 'public/images/logo.svg'));
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
