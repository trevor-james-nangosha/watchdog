const mongoose = require('mongoose')
DATABASE_URI = "mongodb://localhost/sessionsDB"

//mongoDB will create the sessionsDB the first time anything is saved to it

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.error(error)
    }
}

// export default connectDB;

module.exports = connectDB;
