import mongoose from "mongoose";

// i do not need any schemas for the sessions tutorial
// i am just writing the stuff below just to jog my memory

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    dateOfBirth: Date
})

export default mongoose.model( 'User', userSchema );
