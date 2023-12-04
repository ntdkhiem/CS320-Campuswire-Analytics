"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// const client = new MongoClient(process.env.connectionID); //need to import
// const db = client.db('CampusWire');
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('hi');
}));
app.get('/totalUnreadPosts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // let collection = await db.collection("dailyStats");
    // let result = await collection.aggregate([
    //     {
    //       $group: {
    //         _id: null,
    //         totalUnreadPosts: { $sum: "$numUnreadPosts" }
    //       }
    //     }
    //   ]).toArray();
    res.send(300);
}));
// app.get('/numUnreadPosts/:date', async(req, res) => { //gets ttl num of unread posts for the day
//   let date = req.params.date;
//   let collection = await db.collection("dailyStats");
//   let result = await collection.findOne({date: date})
//   let data = {numUnreadPosts: result.numUnreadPosts}
//   res.json(data);
// })
// app.get('/totalUnansweredQuestions', async(req, res) => { //gets ttl num of unanswered questions
//   let collection = await db.collection("dailyStats");
//   let result = await collection.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalUnreadPosts: { $sum: "$totalUnansweredQuestions" }
//         }
//       }
//     ]).toArray();
//   let data = {totalUnansweredQuestions: result[0]}
//   res.json(data);
// });
// app.get('/numUnansweredQuestions/:date', async(req, res) => { //gets ttl num of unanswered questions for the day
//   let date = req.params.date;
//   let collection = await db.collection("dailyStats");
//   let result = await collection.findOne({date: date})
//   let data = {numUnansweredQuestions: result.numUnansweredQuestions}
//   res.json(data);
// })
// app.get('/numPosts', async(req, res) => { //gets ttl num of posts
//   let collection = await db.collection("dailyStats");
//   let result = await collection.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalUnreadPosts: { $sum: "$numPosts" }
//         }
//       }
//     ]).toArray();
//   let data = {numPosts: result[0]}
//   //res.json(data);
//   res.json({numPosts: 300})
// });
// app.get('/numPosts/:date', async(req, res) => { //gets ttl num of posts for the day
//   let date = req.params.date;
//   let collection = await db.collection("dailyStats");
//   let result = await collection.findOne({date: date})
//   let data = {numPosts: result.numPosts}
//   res.json(data);
// })
// app.get('/numComments', async(req, res) => { //gets ttl num of comments
//   let collection = await db.collection("dailyStats");
//   let result = await collection.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalUnreadPosts: { $sum: "$numComments" }
//         }
//       }
//     ]).toArray();
//   let data = {numComments: result[0]}
//   res.json(data);
// });
// app.get('/numComments/:date', async(req, res) => { //gets ttl num of comments for the day
//   let date = req.params.date;
//   let collection = await db.collection("dailyStats");
//   let result = await collection.findOne({date: date})
//   let data = {numComments: result.numComments}
//   res.json(data);
// })
// app.get('/avgResponseTime', async(req, res) => { //gets avg response time
//   let collection = await db.collection("dailyStats");
//   let result = await collection.aggregate([
//       {
//         $group: {
//           _id: null,
//           totalUnreadPosts: { $sum: "$avgResponseTime" }
//         }
//       }
//     ]).toArray();
//   let data = {avgResponseTime: result[0]}
//   res.json(data);
// });
// app.get('/avgResponseTime/:date', async(req, res) => { //gets avg response time
//   let date = req.params.date;
//   let collection = await db.collection("dailyStats");
//   let result = await collection.findOne({date: date})
//   let data = {avgResponseTime: result.avgResponseTime}
//   res.json(data);
// })
// app.get('/top3/:rank', async(req, res) => { //gets top 3 posts title, body, likes, comments, views, multiple views
//   let rank = req.params.rank
//   let collection = await db.collection("top3");
//   let result = await collection.findOne({rank: rank})
//   let post = result.post
//   let data = {title: post.title, body: post.body, likes: post.likes, comments: post.comments, uniqueViews: post.uniqueViews, views: post.views}
//   res.json(data)
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
//# sourceMappingURL=index.js.map