import mongoose from 'mongoose';

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function connectDB() {
  const dbURI = process.env.DB_URI;

  try {
    const db = await mongoose.connect(dbURI, connectOptions);

    console.info(`Successfully connected to database : ${dbURI}`);

    return db.connection;
  } catch (error) {
    console.error(`Error connecting to database : ${error}`);
    throw new Error(error);
  }
}
