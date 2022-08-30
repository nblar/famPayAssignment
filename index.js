const express = require ('express');
const app = express();

//controller routes
const defaultRoute= require('./routes/hello');
const searchRoute = require('./routes/search');
app.use(express.json());

app.use('/', defaultRoute); //sample hello world route
app.use('/search', searchRoute);
//mention the route of search api 

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})