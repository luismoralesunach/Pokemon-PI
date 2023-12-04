const server = require('./src/app.js');
const express = require('express')
const { conn } = require('./src/db.js');
const router = require('./src/routes/index.js')


// Syncing all the models at once.



// server.use('/pokemon', router)

conn.sync({ force: true }).then(() => { 
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
