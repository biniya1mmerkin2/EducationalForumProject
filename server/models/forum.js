import mongoose from "mongoose";
const catagorySchema = mongoose.Schema({
  title: String,
  description: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CreateCatagory = mongoose.model("CreateCatagory", catagorySchema);
export default CreateCatagory;
