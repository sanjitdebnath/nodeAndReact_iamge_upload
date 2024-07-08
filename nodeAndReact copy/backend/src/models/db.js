const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'media_upload';
const collectionName = 'upload_db';
const client = new MongoClient(uri);


exports.get_All_Media = async () => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const documents = await collection.find({}).toArray();
        result = documents.map(doc => ({ id: doc._id, filename: doc.filename }));
        return result;
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await client.close();
    }
}


exports.get_Media_count_db = async () => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const count = await collection.countDocuments({});
        return count;
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await client.close();
    }
}

exports.set_media = async (media) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const insertResult = await collection.insertOne(media);
        return insertResult;
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await client.close();
    }
}

exports.delete_single_media = async (id) => {
    
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount > 0) {
            return true;
        } else {
            return false;
        }

    } catch (e) {
        console.error('Error:', e);
    } finally {
        await client.close();
    }
}

