import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req,res)=>res.json({ ok: true })); // sanity check

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('API listening on', PORT));
