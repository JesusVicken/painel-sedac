import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ativosRoutes from './routes/ativos.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/ativos', ativosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
