import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://shanujyadav:9528492010@altaneohrms.jy1nw6a.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB;
