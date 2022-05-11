const res = require('express/lib/response');
const { ObjectId } = require('mongodb');
const mongo = require('../shared');



module.exports.getroomdetails = async (req, res, next) => {
    try {

        const data = await mongo.selectedDb.collection("room-Details").aggregate([

            {
                $project: {
                    _id: 0,
                    "Number of seats available": 1,
                    "Tv": 1,
                    "Ac": 1,
                    "Water-Heater": 1,
                    "Wi-Fi": 1,
                    "Price for one hour": 1
                }
            }
        ]).toArray();;

        res.send(data);
    }
    catch (err) {
        console.log(err);
    }
}





module.exports.postcustomerdetails = async (req, res, next) => {
    try {

        const data = await mongo.selectedDb.collection("booking-details").insertOne(req.body);

        res.send(data);
    }
    catch (err) {
        console.log(err);
    }
}


module.exports.updatecustomerdetails = async (req, res, next) => {
    try {

        const response = await mongo.selectedDb.collection('booking-details').updateOne(
            { _id: ObjectId(req.params.id) },
            { $set: { ...req.body } }
        )
        res.send(response)

    }
    catch (err) {
        console.log(err)

    }
}

module.exports.deletecustomerdetails = async (req, res, next) => {
    try {

        const response = await mongo.selectedDb.collection('booking-details').remove(
            { _id: ObjectId(req.params.id) }

        )
        res.send(response)

    }
    catch (err) {
        console.log(err)

    }
}


module.exports.getbookingstatus = async (req, res, next) => {
    try {
        const response = await mongo.selectedDb.collection('booking-status').aggregate([
            {
                $lookup: {
                    from: 'booking-details',
                    localField: 'Date',
                    foreignField: 'Date',
                    as: 'Booking-Details'
                }
            },

            {
                $project: {
                    _id: 0,
                    'Room Name': 1,
                    'Booked-Status': 1,
                    'Customer Name': 1,
                    'Date': 1,
                    'Start Time': 1,
                    'End Time': 1
                }
            }
        ]).toArray();

        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}


module.exports.getcustomerdata = async (req, res, next) => {
    try {
        const response = await mongo.selectedDb.collection('booking-status').aggregate([
            {
                $lookup: {
                    from: 'booking-details',
                    localField: 'Date',
                    foreignField: 'Date',
                    as: 'Booking-Details'
                }
            },

            {
                $project: {
                    _id: 0,
                    'Room Name': 1,
                    'Customer Name': 1,
                    'Date': 1,
                    'Start Time': 1,
                    'End Time': 1
                }
            }
        ]).toArray();

        res.send(response)
    }
    catch (err) {
        console.log(err)
    }
}