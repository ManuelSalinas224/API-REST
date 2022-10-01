const server = require('./src/config.js');
const { conn } = require('./src/db.js');
const swaggerFile = require('./swagger_output.json')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()

conn.sync().then(() => {
  server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  server.listen(process.env.PORT, () => {
    console.log('%s listening at '+process.env.PORT);
  });
});