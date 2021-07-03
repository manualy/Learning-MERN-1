import mongoose from 'mongoose';

const postMessageSchema = mongoose.Schema(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: new Date()
    }
  }
);

export const postMessage = mongoose.model('PostMessage', postMessageSchema);
