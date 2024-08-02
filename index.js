import express from 'express';
import appRouter from './routes/index.js';
import { connectToDatabase } from './db/index.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())


app.use("/api/v1/products", appRouter);

const PORT = process.env.PORT || 4000;

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}).catch((err) => {
    console.log("Server Error", err);
    process.exit();
})
