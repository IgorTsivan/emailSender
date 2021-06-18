const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendEmail = require('./routing/sendMail');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/sendEmail/', sendEmail);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});
