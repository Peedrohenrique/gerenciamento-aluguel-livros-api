require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const cors = require("cors");
const PORT = process.env.PORT || 3000;

require('./database');

const app = express();

// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Authorization, Access-Control-Request-Headers,"
    );
    app.use(cors());
    next();
  });

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log(`Server running on port: http://localhost:${PORT}`));