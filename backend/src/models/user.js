import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  
    lowercase: true,
    trim: true
  }, 
  email: {
    type: String,
    unique: true,
  },
   bio: {
      type: String,
      default: "",
    },

    avatarUrl: {
      type: String,
      default: "",
    },

    followers: {
      type: Number,
      default: 0,
    },

    following: {
      type: Number,
      default: 0,
    },
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)