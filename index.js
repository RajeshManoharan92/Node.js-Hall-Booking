const express = require('express');
const mongo = require('./shared');
const BookingRouter = require('./router/hall-booking');
const cors = require('cors');



const app = express();

app.use(express.json());
app.use(cors())

mongo.Connect();

app.use('/hall', BookingRouter);

app.listen(process.env.PORT || 3000);