import mongoose from "mongoose";
import { config } from "dotenv";

config()
let { DB_ADMIN, DB_ADMIN_PASS } = process.env
const MongoDBURI = `mongodb+srv://${DB_ADMIN}:${DB_ADMIN_PASS}@cluster0.lijds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export async function connectDB() {
  try {
    const connection = await mongoose.connect(MongoDBURI)
    // console.log(connection)
    if (connection) { 
      console.log('Database Connected')
    }
  } catch (error) {
    console.error(error)
  }

}