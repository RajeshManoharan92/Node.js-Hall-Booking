const { MongoClient } = require('mongodb');


module.exports = {

    selectedDb: {},

    async Connect() {
        try {
            const client = await MongoClient.connect('mongodb://localhost:27017');
            this.selectedDb = client.db('Room-Booking');
        }
        catch (err) {
            console.log(err)
        }
    }

}