import mongoose from "mongoose";
DATABASE_URI = "mongodb://localhost/sessionsDB'"

const connectDB = async () => {
    try {
        mongoose.connect(DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.error(error)
    }
}

export default connectDB;
