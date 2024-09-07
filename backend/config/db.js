import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mahimadhawan125:Mahima125@cluster0.bh7vdtx.mongodb.net/food-del');
    console.log("db connected");
  } catch (error) {
    console.error("db connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};


