import mongoose from "mongoose";

const connectDB = (url) => {
  // this will be useful for the future, when we will be working with the search functionality
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
