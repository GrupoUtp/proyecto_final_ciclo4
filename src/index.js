const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//configuracion - settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas url
app.use('/api/tasks',require('./routes/task.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//iniciando servidor
app.listen(app.get('port'), () => {
    console.log(`servidor on port ${app.get('port')}`);
});