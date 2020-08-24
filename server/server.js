import cors from 'cors';
import express from 'express';
import travels from './routes/travels';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/travels', travels);

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
