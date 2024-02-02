// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.DB_CONNECT as string, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     });
//     console.log("MongoDB connection established");
//   } catch (error) {
//     console.error("MongoDB connection failed");
//     process.exit(1);
//   }
// };