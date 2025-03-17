import express from 'express';
import cors from 'cors';
import uvRoute from './routes/uvRoute.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(express.json());
app.use(cors());

// 路由
app.use('/api', uvRoute);

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});