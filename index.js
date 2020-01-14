const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require('./middleware/logger')

/* app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

//Init middleware 
//app.use(logger);

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));