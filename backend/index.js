import cors from "cors" ;
import express from "express";
import NotesRoute from "./routes/NotesRoute.js";
import path from "path";
import { fileURLToPath } from "url";


const app = express() ;
app.use(cors());
app.use(express.json());
app.use(NotesRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve file static React build
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Untuk semua route yang tidak dikenal, kirim index.html (biar React Router handle)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(3000, () => console.log('Server up and running...'));