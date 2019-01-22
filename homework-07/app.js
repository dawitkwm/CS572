const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const assert = require('assert');

const app = express();

const mongoClientUrl = 'mongodb://localhost:27017';
// const mongoClient = new MongoClient(mongoClientUrl, { useNewUrlParser: true });


app.listen(4000, () => console.log("Listening at port 4000."));

app.use('/secret', (req, res, next) => {

    MongoClient.connect(mongoClientUrl, function (conErr, mongoClient) {
        assert.equal(null, conErr);
        console.log("Connected successfully to mongoDB server.");

        const db = mongoClient.db('mwa');
        const col = db.collection("homework7");

        //async
        col.findOne({}, (findErr, doc) => {
            req.encryptedSecreteMessage = doc.message;
            mongoClient.close();
            next();
        });
        // console.dir("Done");
    });
});

app.use('/secret', (req, res, next) => {
    // console.dir(req.encryptedSecreteMessage);
    const algorithm = 'aes256'; 
    const privateKey = 'asaadsaad';

    const decipher = crypto.createDecipher(algorithm, privateKey);
    const decrypted = decipher.update(req.encryptedSecreteMessage, 'hex', 'utf8') + decipher.final('utf8');

    //assert
    const cipher = crypto.createCipher(algorithm, privateKey);
    const encrypted = cipher.update(decrypted, 'utf8', 'hex') + cipher.final('hex');
    assert.equal(encrypted, req.encryptedSecreteMessage);

    //add the decrpted message to the req obj as a property
    req.decryptedSecreteMessage = decrypted;
    next();
});

app.get('/', (req, res, next) => {
    res.send("Welcome To Secret Revealing.");
});

app.get('/secret', (req, res, next) => {
    // console.log(req.decryptedSecreteMessage);
    res.send(req.decryptedSecreteMessage);
});