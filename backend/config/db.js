import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected at: -> 👍 ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Database error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB