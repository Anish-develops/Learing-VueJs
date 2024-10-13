import mongoose from "mongoose";

const connectDB = async () => {
    try {

        console.log(`${process.env.MONGO_URI}/${process.env.DATABASE_NAME}`);
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`
        );

        console.log(
            "\n mongoose is connected successfully",
            `${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("Error the database did not connected !!!!!!!!!", error);
        process.exit;
    }
};


export default connectDB;