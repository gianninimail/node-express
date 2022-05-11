import mongoose from "mongoose";

const stringConn = 'mongodb+srv://gianninimail:Gtej2609@mongodb.dxtrn.mongodb.net/api-node';

mongoose.connect(stringConn);

let db = mongoose.connection;

export default db;