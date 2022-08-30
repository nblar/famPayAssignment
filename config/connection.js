const Sequelize = require('sequelize')

const sequelize = new Sequelize('sql6515912', 'sql6515912', 'e9BQccV69A', {
    host: 'sql6.freesqldatabase.com',
    dialect:'mysql'
  });
 sequelize.authenticate()
  .then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

sequelize.sync() 

module.exports = sequelize;