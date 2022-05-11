const express = require('express');
const mongo = require('./shared');
const BookingRouter = require('./router/hall-booking');



const app = express();

app.use(express.json());

mongo.Connect();

app.use('/hall', BookingRouter);

app.listen(3000);