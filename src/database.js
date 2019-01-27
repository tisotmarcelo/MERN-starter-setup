const mongoose = require('mongoose');

// Constante con la dirección de la base de datos
const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;