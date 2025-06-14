import express from 'express'
import mongoose from 'mongoose';
import dotenv from'dotenv';
import cors from'cors';
import { upload } from './middlewares/upload.js'


import destinationRoutes from'./routes/destinationRoutes.js';
import packageRoutes from './routes/packageRoutes.js'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use('/uploadS', express.static('upload'));

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', packageRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));