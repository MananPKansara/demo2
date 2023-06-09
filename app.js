const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use( '/api-docs', swaggerUi.serve, swaggerUi.setup( swaggerDocument ));
app.use( express.urlencoded( { extended : true } ) );
app.use(express.json());

const signup = require( './routers/signup' );

app.use( '/signup', signup )

app.listen(9000);