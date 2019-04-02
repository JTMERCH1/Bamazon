const express = require('express');
const db = require("./models");
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`Bamazon is active on PORT ${PORT}`);
    });
})
