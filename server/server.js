import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Help Center API!');
});

const startServer = () => {
  try {
    app.listen(8080, () => console.log('Server started on port 8080 http://localhost:8080'));
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();