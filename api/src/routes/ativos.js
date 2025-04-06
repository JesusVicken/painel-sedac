import express from 'express';
import db from '../db/db.js';

const router = express.Router();

router.get('/quantidade', (req, res) => {
    db.query('SELECT COUNT(*) AS total FROM Device', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ erro: 'Erro ao consultar ativos' });
        }
        res.json(results[0]);
    });
});

router.get('/servidores-por-site', (req, res) => {
    db.query(`
      SELECT site, COUNT(*) AS total
      FROM Device
      WHERE tipo = 'servidor'
      GROUP BY site
    `, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

router.get('/ativos-por-site', (req, res) => {
    db.query(`
      SELECT site, COUNT(*) AS total
      FROM Device
      GROUP BY site
    `, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

export default router;
