import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const ClassModel = new mongoose.Schema({
    name: String,
    trainer: String,
    level: String,
    schedule: [String] || [Date],
    startDate: String || Date,
    endDate: String || Date,
    img: String,
});

ClassModel.plugin(mongoosePaginate);

// Defin text indexes => support text search queries
ClassModel.index({
    name: "text",
    trainer: "text",
    level: "text",
    schedule: "text",
    startDate: "text",
    endDate: "text",
});

export const Class = mongoose.model("Class", ClassModel);
