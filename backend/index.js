import cors from "cors" ;
import express from "express";
import NotesRoute from "./routes/NotesRoute.js";



const app = express() ;
app.use(cors());
app.use(express.json());
app.use(NotesRoute);

app.listen(3000, () => console.log('Server up and running...'));