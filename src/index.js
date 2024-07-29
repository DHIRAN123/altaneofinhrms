import { app } from './app.js';
import connectDB from './db/connectDb.js';
import 'dotenv/config'; 

const startServer = async () => {
    try {
        await connectDB(); 

        const port = 8000; 

        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

startServer();
