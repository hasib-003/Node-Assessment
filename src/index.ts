require("dotenv").config();

const express = require('express');
const app = express();

app.listen(process.env.APP_PORT, () => {
            console.log("Listening on port", process.env.APP_PORT);
        }); // Start the server and listen on the specified port