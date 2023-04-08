import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017');

export const db = mongoose.connection;

db.on('error', () => console.log('Connection error'));

db.once('open', () => console.log('Mongo connected'));
