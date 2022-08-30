const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js');

const video_database = sequelize.define('video_databases', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
    },
    publishing_timestamp: {
      type: Sequelize.STRING,
      allowNull: false
    },
    thumbnail_url: {
      type: Sequelize.STRING,
    },
    videoId: {
      type: Sequelize.STRING,
      allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log('video database table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 })

 module.exports= video_database;



