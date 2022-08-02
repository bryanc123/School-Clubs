const { MongoClient } = require("mongodb");

require("dotenv").config();

const client = new MongoClient(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let database = {};

module.exports = {
    connectToServer: async () => {
        await client.connect();

        console.log("Connected to MongoDB");

        database = client.db(process.env.DB_NAME);

        return;
    },
    getDatabase: () => {
        return database;
    }
}