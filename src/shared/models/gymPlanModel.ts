import mongoose from "mongoose";

const GymPlanModel = new mongoose.Schema({
    benefits: [String],
    price: Number,
    img: String,
    type: String,
});

export const GymPlan = mongoose.model("GymModel", GymPlanModel);
