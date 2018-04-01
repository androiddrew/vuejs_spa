const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const indexHTML = (() => {
  //path.resolve helps us locate the file relative to the server.js file
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})(); //iffy

//used to retrun all static modules from the dist folder
app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

//this extends the server with two new modules in the setupdeverser method
require("./build/dev-server")(app);

app.get('*', (req, res) => {
  res.write(indexHTML);
  res.end();
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
