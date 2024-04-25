import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
    res.send('Primeira Rota da API!');

})

export default router;