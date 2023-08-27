const express = require('express')
const expressLayouts = require('express-ejs-layouts')
 

const app = express()

 app.use(express.static('public'))
// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs')

var routes = require('./routes/index.js') //path
routes(app)


const port = 3000

app.listen(port, ()=>console.info(`App listening at port ${port}`));

