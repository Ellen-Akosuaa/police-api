import express from "express";
import statementRouter from "./routes/statement.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

const app = express();
app.use(express.json());

dbConnection();

app.listen(8060, () => {
    console.log('App listening on port 8060');
});

app.use(statementRouter);