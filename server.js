const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));
require('./app/routing/apiRoutes.js')(app);
require(path.join(__dirname,'./app/routing/htmlRoutes.js'))(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
