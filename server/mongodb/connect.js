import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log(error);
  }
};


export default connectDB;


