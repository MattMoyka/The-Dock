import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
);
export default mongoose.model("users", User);
