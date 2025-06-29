import mongoose from 'mongoose'


const mongoURL ='mongodb://localhost:27017/authPractice';
//const uri = process.env.MONGO_URI;
//console.log('MONGO_URI:', process.env.MONGO_URI);


mongoose.connect(mongoURL);

const db = mongoose.connection;

// Event listeners for connection status
db.on('connected', () => {
    console.log("Connected to MongoDB");
});

db.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});

db.on('disconnected', () => {
    console.log("Disconnected from MongoDB");
});

export default db; 
