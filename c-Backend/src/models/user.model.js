import mongoose, { Schema } from "mongoose";

//data modeling
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "video",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refereshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (this.isModified("password"))
    this.password = bcrypt.hash(this.password, 10);
  next();
});
export const User = mongoose.model("User", userSchema);
