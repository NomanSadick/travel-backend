import express from 'express';
import cors from 'cors';
import packageRoutes from './routes/packageRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/packages', packageRoutes);

app.get('/', (_req, res) => {
  res.send('Travel API is running...');
});

export default app;
