import express from "express";
import morgan from "morgan";
import cors from "cors";
import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://cargill0523:NgBOply50frqpJfS@cluster0.zq7qnts.mongodb.net/"
);
const db = client.db("campuswire");

const app = express();
const port = 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the connectToDatabase function
connectToDatabase();

app.get("/totalUnansweredQuestions", async (req, res) => {
  //gets ttl num of unanswered questions
  let collection = await db.collection("numUnansweredQuestions");
  let result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          totalUnreadPosts: { $sum: "$number_of_unanswered_posts" },
        },
      },
    ])
    .toArray();
  let data = { totalUnansweredQuestions: result[0] };
  res.json(data);
});

app.get("/numUnansweredQuestions/:date", async (req, res) => {
  //gets ttl num of unanswered questions for the day
  let date = req.params.date;
  let collection = await db.collection("numUnansweredQuestions");
  let result = await collection.findOne({ date: date });
  let data = { numUnansweredQuestions: result.number_of_unanswered_posts };
  res.json(data);
});

app.get("/numPosts", async (req, res) => {
  //gets ttl num of posts
  let collection = await db.collection("numPostsForDay");
  let result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          totalUnreadPosts: { $sum: "$number_of_posts" },
        },
      },
    ])
    .toArray();
  let data = { numPosts: result[0] };
  //res.json(data);
  res.json({ numPosts: 300 });
});

app.get("/numPosts/:date", async (req, res) => {
  //gets ttl num of posts for the day
  let date = req.params.date;
  let collection = await db.collection("numPostsForDay");
  let result = await collection.findOne({ date: date });
  let data = { numPosts: result.number_of_posts };
  res.json(data);
});

app.get("/numComments", async (req, res) => {
  //gets ttl num of comments
  let collection = await db.collection("numCommentsForDay");
  let result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          totalUnreadPosts: { $sum: "$number_of_comments" },
        },
      },
    ])
    .toArray();
  let data = { numComments: result[0] };
  res.json(data);
});

app.get("/numComments/:date", async (req, res) => {
  //gets ttl num of comments for the day
  let date = req.params.date;
  let collection = await db.collection("numCommentsForDay");
  let result = await collection.findOne({ date: date });
  let data = { numComments: result.number_of_comments };
  res.json(data); //{date: [], count: []}
});

app.get("/avgResponseTime", async (req, res) => {
  //gets avg response time
  let collection = await db.collection("avgResponseTimeForDay");
  let result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          totalUnreadPosts: { $sum: "$average_response_time_seconds" },
        },
      },
    ])
    .toArray();
  let data = { avgResponseTime: result[0] };
  res.json(data);
});

app.get("/avgResponseTime/:date", async (req, res) => {
  //gets avg response time
  let date = req.params.date;
  let collection = await db.collection("avgResponseTimeForDay");
  let result = await collection.findOne({ date: date });
  let data = { avgResponseTime: result.average_response_time_seconds };
  res.json(data);
});

app.get("/top3/:rank", async (req, res) => {
  //gets top 3 posts title, body, likes, comments, views, multiple views
  let rank = req.params.rank;
  let collection = await db.collection("top3");
  let result = await collection.findOne({ rank: rank });
  let post = result.post;
  let data = {
    title: post.title,
    body: post.body,
    likes: post.likes,
    comments: post.comments,
    uniqueViews: post.uniqueViews,
    views: post.views,
  };
  res.json(data);
});

// app.get('/totalUnreadPosts', async(req, res) => { //gets ttl num of unread posts
//   let collection = await db.collection("dailyStats");
//   let result = await collection.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalUnreadPosts: { $sum: "$numUnreadPosts" }
//         }
//       }
//     ]).toArray();
//   let data = {totalUnreadPosts: result[0]}
//   res.json(data);
// });

// app.get('/numUnreadPosts/:date', async(req, res) => { //gets ttl num of unread posts for the day
//   let date = req.params.date;
//   let collection = await db.collection("dailyStats");
//   let result = await collection.findOne({date: date})
//   let data = {numUnreadPosts: result.numUnreadPosts}
//   res.json(data);
// })

// app.get('/numInstructorResponses', async(req, res) => { //gets ttl num of instructor responses
//   res.send('rrt')
// })

// app.get('/numInstructorResponses/:date', async(req, res) => { //gets ttl num of instructor responses for the day
//   res.send('rrt')
//   const date = req.params.date;
// })

// app.get('/numStudentResponses', async(req, res) => { //gets ttl num of student responses
//   res.send('rrt')
// })

// app.get('/numStudentResponses/:date', async(req, res) => { //gets ttl num of student responses
//   res.send('rrt')
//   const date = req.params.date;
// })

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
