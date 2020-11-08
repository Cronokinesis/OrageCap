import mongoose from 'mongoose';
const { Schema } = mongoose;

export const SchemaThaiJokes = new Schema({
    id: { type: Schema.Types.Number, default: 1 },
    joke: { type: Schema.Types.String },
    categories: [Schema.Types.String],
    likes: { type: Schema.Types.Number, default: 0 },
    dislikes: { type: Schema.Types.Number, default: 0 },
    createdAt: { type: Schema.Types.Date, default: Date.now },
    updatedAt: { type: Schema.Types.Date, default: Date.now }
})