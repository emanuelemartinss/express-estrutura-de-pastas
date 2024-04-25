import express from 'express';
import indexRouter from './routes/index.js';
import userRoutes from './routes/user.js';
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/', indexRouter);
app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})