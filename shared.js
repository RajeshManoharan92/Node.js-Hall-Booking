const { MongoClient } = require('mongodb');


module.exports = {

    selectedDb: {},

    async Connect() {
        try {
            const client = await MongoClient.connect('mongodb+srv://Rajesh:3VXKLHCcNW7kfv1A@cluster0.lttct.mongodb.net?retryWrites=true&w=majority');
            this.selectedDb = client.db('book-room');
        }
        catch (err) {
            console.log(err)
        }
    }

}