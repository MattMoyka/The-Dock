import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Item = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default mongoose.model('items', Item);
