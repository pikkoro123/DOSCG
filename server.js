const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/DOSCG'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/DOSCG/index.html'));});

console.log("Listening on " + (process.env.PORT || 4200));

app.listen(process.env.PORT || 4200);
