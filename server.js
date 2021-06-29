const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv").config();
const PORT = 8000

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))

// const db = require('./server/models');

// db.sequelize.sync();

require('./server/routes/section.routes')(app);
require('./server/routes/user.routes')(app);
require('./server/routes/question.routes')(app);
require('./server/routes/category.routes')(app);
// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.listen(PORT, () => console.log(`http://localhost:${PORT}/api`));