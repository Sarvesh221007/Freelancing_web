const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    budget: { type: Number },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bids: [
      {
        freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        amount: Number,
        message: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
    selectedFreelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "open" },
    submission: {
      type: String, // could be text or file URL
      default: "",
    },
    isSubmitted: {
      type: Boolean,
      default: false,
    },
    feedback: {
      rating: { type: Number, min: 1, max: 5 },
      message: { type: String, default: "" },
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    submission: { type: String, default: "" },
    isSubmitted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
