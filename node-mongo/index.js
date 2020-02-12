const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const dboper = require("./operations");
const url = 'mongodb://localhost:27017/';

const dbname = 'conFusion';

MongoClient.connect(url).then((client)=>{
    
    console.log('connected correctly');
    const db = client.db(dbname);
    dboper.insertDocument(db,{name:"Vadonut",description:"Test"},'dishes')
    .then((result)=>{
        console.log("Insert Document",result.ops);
        return dboper.findDocuments(db, "dishes");
    })
    .then((docs)=>{
        console.log("Found Documents:", docs);
        return dboper.updateDocument(db, { name: "Vadonut" },{ description: "Updated Test" }, "dishes");
    })
    .then((result) => {
        console.log("Updated Document:", result.result);
        return dboper.findDocuments(db, "dishes");
    })
    .then((docs) => {
        console.log("Found Updated Documents:", docs);
        return db.dropCollection("dishes");
    })        
    .then((result) => {
        console.log("Dropped Collection: ", result);
        return client.close();
    })
    .catch((err)=> console.log(err));
})
.catch((err)=> console.log(err));