import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());

app.get('/', async(req, res) => (
  res.send('hi')
))

app.get('/traffic', async(req, res) => (
  res.send('traffiic data')
))

app.get('/unanswered', async(req, res) => (
  res.send('num of unanswered')
))

app.get('/recentResponseTimes', async(req, res) => (
  res.send('rrt')
))

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
} );