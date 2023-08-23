import 'dotenv/config';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { _filename, __dirname } from './utils.js';// Corregido
import path from 'path';
import indexRouter from './routes/index.js'; // Corregido
import usersRouter from './routes/users.js'; // Corregido
import './config/database.js'
import cors from 'cors';

const app = express();


// Configurar CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204, 
};

// Habilitar CORS
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('api/cities', indexRouter);
app.use('api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Create and start the server
const port = process.env.PORT || 3000; // You can adjust the port number as needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;