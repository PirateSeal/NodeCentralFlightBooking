import express from 'express';
import { json } from "body-parser";
import { FlightController } from './controller/FlightController';

const app = express();
const port = 3000;
app.use(json());
app.use(FlightController)

app.get('/', (req, res) => {
  res.send('Health check confirmed');
});


app.listen(port, () => {
    console.log("Listening on port 3000");
 });