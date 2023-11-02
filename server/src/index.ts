import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());

app.get('/', async(req, res) => {
  res.send('hi')
})

app.get('/numUnreadPosts', async(req, res) => { //gets ttl num of unread posts
  res.send('traffiic data')
})

app.get('/numUnreadPosts/:date', async(req, res) => { //gets ttl num of unread posts for the day
  res.send('rrt')
  const date = req.params.date;
})

app.get('/numUnansweredQuestions', async(req, res) => { //gets ttl num of unanswered questions
  res.send('num of unanswered')
})

app.get('/numUnansweredQuestions/:date', async(req, res) => { //gets ttl num of unanswered questions for the day
  res.send('num of unanswered')
  const date = req.params.date;
})

app.get('/numPosts', async(req, res) => { //gets ttl num of posts
  res.send('rrt')
})

app.get('/numPosts/:date', async(req, res) => { //gets ttl num of posts for the day
  res.send('rrt')
  const date = req.params.date;
})

app.get('/numComments', async(req, res) => { //gets ttl num of comments
  res.send('rrt')
})

app.get('/numComments/:date', async(req, res) => { //gets ttl num of comments for the day
  res.send('rrt')
  const date = req.params.date;
})

app.get('/numInstructorResponses', async(req, res) => { //gets ttl num of instructor responses
  res.send('rrt')
})

app.get('/numInstructorResponses/:date', async(req, res) => { //gets ttl num of instructor responses for the day
  res.send('rrt')
  const date = req.params.date;
})

app.get('/numStudentResponses', async(req, res) => { //gets ttl num of student responses
  res.send('rrt')
})

app.get('/numStudentResponses/:date', async(req, res) => { //gets ttl num of student responses
  res.send('rrt')
  const date = req.params.date;
})

app.get('/avgResponseTime', async(req, res) => { //gets avg response time
  res.send('rrt')
})

app.get('/post/:id', async(req, res) => { //gets information about a post
  res.send('rrt')
  const id = req.params.id;
})

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
}); 