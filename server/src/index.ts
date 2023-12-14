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
  await client.connect();
}

// Call the connectToDatabase function
connectToDatabase();

app.get("/numUniqueUsers", async (req, res) => {
  // gets ttl num of unanswered questions
  const collection = await db.collection("numUsersForDay");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$estimated_unique_users" },
        },
      },
    ])
    .toArray();
  res.json(result[0]);
});

app.get("/numViewsTrends", async (req, res) => {
  const collection = await db.collection("numViewsForDay");
  const result = await collection.aggregate(
    [
      {
        $project: {
          _id: null,
           date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
           count: "$views"
        }
      }
    ]
 )
 const documents = await result.toArray();
  res.json(documents);
});

app.get("/numUnansweredQuestions", async (req, res) => {
  // gets ttl num of unanswered questions
  const collection = await db.collection("numUnansweredQuestionsForDay");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$number_of_unanswered_posts" },
        },
      },
    ])
    .toArray();
  res.json(result[0]);
});

app.get("/numUnansweredQuestionsTrends", async (req, res) => {
  const collection = await db.collection("numUnansweredQuestionsForDay");
  const result = await collection.aggregate(
    [
      {
        $project: {
          _id: null,
           date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
           count: "$number_of_unanswered_posts"
        }
      }
    ]
 )
 const documents = await result.toArray();
  res.json(documents);
});

app.get("/numPosts", async (req, res) => {
  // gets ttl num of posts
  const collection = await db.collection("numPostsForDay");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$number_of_posts" },
        },
      },
    ])
    .toArray();
  res.json(result[0]);
});

app.get("/numPostsTrends", async (req, res) => {
  const collection = await db.collection("numPostsForDay");
  const result = await collection.aggregate(
    [
      {
        $project: {
          _id: null,
           date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
           count: "$number_of_posts"
        }
      }
    ]
 )
 const documents = await result.toArray();
  res.json(documents);
});

app.get("/numComments", async (req, res) => {
  // gets ttl num of comments
  const collection = await db.collection("numCommentsForDay");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$number_of_comments" },
        },
      },
    ])
    .toArray();
  res.json(result[0]);
});

app.get("/numCommentsTrends", async (req, res) => {
  const collection = await db.collection("numCommentsForDay");
  const result = await collection.aggregate(
    [
      {
        $project: {
          _id: null,
           date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
           count: "$number_of_comments"
        }
      }
    ]
 )
 const documents = await result.toArray();
  res.json(documents);
});

app.get("/avgResponseTime", async (req, res) => {
  // gets avg response time
  const collection = await db.collection("avgResponseTimeForDay");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: null,
          avg: { $avg: "$average_response_time_seconds" },
        },
      },
    ])
    .toArray();
  result[0].avg /= 3600
  result[0].avg = result[0].avg.toFixed(1)
  res.json(result[0]);
});

app.get("/avgResponseTimeTrends", async (req, res) => {
  const collection = await db.collection("avgResponseTimeForDay");
  const result = await collection.aggregate(
    [
      {
        $project: {
          _id: null,
           date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
           count: "$average_response_time_seconds"
        }
      }
    ]
 )
 const documents = await result.toArray();
  res.json(documents);
});

app.get("/top3/:rank", async (req, res) => {
  // gets top 3 posts title, body, likes, comments, views, multiple views
  const rank = req.params.rank;
  const collection = await db.collection("top3Ranked");
  const result = await collection.findOne({ rank });
  // tslint:disable-next-line:no-console
  console.log(result);
  const post = result.post;
  const data = {
    title: post.title,
    body: post.body,
    likes: post.likes,
    comments: post.comments,
    uniqueViews: post.uniqueViews,
    views: post.views,
  };
  res.json(data);
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
