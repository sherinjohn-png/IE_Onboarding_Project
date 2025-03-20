import express from 'express';
import cors from 'cors';
import uvRoute from './routes/uvRoute.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/api', uvRoute);

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});