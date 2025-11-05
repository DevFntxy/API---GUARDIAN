//aqui ira la instancia del servidor

import express from 'express';
import morgan from 'morgan';


const app = express(); //Crear una instancia de express

//Settings
app.set('port', process.env.PORT || 3000); //Si el puerto no esta definido en la variable de entorno, usar el puerto 3000 por defecto
app.set('view engine', 'ejs'); //Motor de plantillas

//Middlewares
app.use(morgan('dev')); //Mostrar las peticiones en la consola
app.use(express.json()); //Permitir recibir datos en formato JSON
app.use(express.urlencoded({ extended: true })); //Permitir recibir datos de formularios

export default app;//Exportar la instancia de express