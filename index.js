const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const exphbs = require('express-handlebars');
//const logger = require('./middleware/logger');

/* app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

//Init middleware 
//app.use(logger);

//handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App'
}));

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));