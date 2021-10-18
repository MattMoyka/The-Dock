import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    },
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    phone: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    items: [{ type: Schema.Types.ObjectId, ref: 'items' }],
  },
  { timestamps: true }
);
export default mongoose.model('users', User);
