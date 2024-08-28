import mongoose from "mongoose";

const Card = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
});

const cardSchema = mongoose.model('Card', Card);

export default cardSchema;