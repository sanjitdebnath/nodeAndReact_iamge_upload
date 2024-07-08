const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'media_upload';

let db;
const connectDB = async () => {
    if (!db) {
        try {
            await client.connect();
            db = client.db(dbName);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('MongoDB connection error:', error);
            throw error;
        }
    }
    return db;
};


process.on('SIGINT', async () => {
    await closeDB();
    process.exit(0);
});

const closeDB = async () => {
    console.log("check");
    if (client.topology && client.topology.isConnected()) {
        try {
            await client.close();
            console.log('MongoDB connection closed');
        } catch (error) {
            console.error('Error closing MongoDB connection:', error);
        }
    }
};

module.exports = { connectDB, ObjectId, closeDB };
