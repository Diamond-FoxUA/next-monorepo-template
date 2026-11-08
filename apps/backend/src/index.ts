import express from 'express';
import cors from 'cors';
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend template is ready' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running: http://localhost:${PORT}`));
