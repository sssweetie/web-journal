import mongoose from 'mongoose';

const DB_URL = 'mongodb://0.0.0.0:27017/web-journal';

mongoose.connect(DB_URL);

export const db = mongoose.connection;

db.on('error', () => console.log('Connection error'));

db.once('open', () => console.log('Mongo connected'));
