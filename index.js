import express from "express";
import bodyParser from "body-parser";
import studentsRoute from "./routes/students.js"
import cors  from "cors"
const app = express();

const PORT = 5000;
app.use(cors());
app.get('/', (req, res)=>res.send('Hello from service'));

app.use(bodyParser.json());

app.use('/api', studentsRoute);

app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`));