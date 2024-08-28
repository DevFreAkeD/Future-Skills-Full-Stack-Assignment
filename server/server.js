import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Help Center API!');
});

const startServer = async () => {
    try {
      await connectDB(process.env.MONGODB_URI);
      app.listen(8080, () => console.log('Server started on port 8080 http://localhost:8080'));
    } catch (error) {
      console.error('Error starting server:', error);
    }
};  

startServer();