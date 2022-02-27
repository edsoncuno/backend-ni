import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    recoveryPasswordToken: String
}, {
    versionKey: false
});

export default mongoose.model('User', schema);