import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.js';
import mapsRoutes from './routes/maps.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.set('trust proxy', true);

app.use('/', indexRoutes);
app.use('/maps', mapsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
