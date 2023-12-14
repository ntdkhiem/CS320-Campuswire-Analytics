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
const mongodb_1 = require("mongodb");
const client = new mongodb_1.MongoClient("mongodb+srv://cargill0523:NgBOply50frqpJfS@cluster0.zq7qnts.mongodb.net/");
const db = client.db("campuswire");
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
    });
}
// Call the connectToDatabase function
connectToDatabase();
app.get("/numUniqueUsers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // gets ttl num of unanswered questions
    const collection = yield db.collection("numUsersForDay");
    const result = yield collection
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
}));
app.get("/numViewsTrends", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield db.collection("numViewsForDay");
    const result = yield collection.aggregate([
        {
            $project: {
                _id: null,
                date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                count: "$views"
            }
        }
    ]);
    const documents = yield result.toArray();
    res.json(documents);
}));
app.get("/numUnansweredQuestions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // gets ttl num of unanswered questions
    const collection = yield db.collection("numUnansweredQuestionsForDay");
    const result = yield collection
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
}));
app.get("/numUnansweredQuestionsTrends", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield db.collection("numUnansweredQuestionsForDay");
    const result = yield collection.aggregate([
        {
            $project: {
                _id: null,
                date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                count: "$number_of_unanswered_posts"
            }
        }
    ]);
    const documents = yield result.toArray();
    res.json(documents);
}));
app.get("/numPosts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // gets ttl num of posts
    const collection = yield db.collection("numPostsForDay");
    const result = yield collection
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
}));
app.get("/numPostsTrends", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield db.collection("numPostsForDay");
    const result = yield collection.aggregate([
        {
            $project: {
                _id: null,
                date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                count: "$number_of_posts"
            }
        }
    ]);
    const documents = yield result.toArray();
    res.json(documents);
}));
app.get("/numComments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // gets ttl num of comments
    const collection = yield db.collection("numCommentsForDay");
    const result = yield collection
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
}));
app.get("/numCommentsTrends", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield db.collection("numCommentsForDay");
    const result = yield collection.aggregate([
        {
            $project: {
                _id: null,
                date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                count: "$number_of_comments"
            }
        }
    ]);
    const documents = yield result.toArray();
    res.json(documents);
}));
app.get("/avgResponseTime", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // gets avg response time
    const collection = yield db.collection("avgResponseTimeForDay");
    const result = yield collection
        .aggregate([
        {
            $group: {
                _id: null,
                avg: { $avg: "$average_response_time_seconds" },
            },
        },
    ])
        .toArray();
    result[0].avg /= 3600;
    result[0].avg = result[0].avg.toFixed(1);
    res.json(result[0]);
}));
app.get("/avgResponseTimeTrends", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield db.collection("avgResponseTimeForDay");
    const result = yield collection.aggregate([
        {
            $project: {
                _id: null,
                date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                count: "$average_response_time_seconds"
            }
        }
    ]);
    const documents = yield result.toArray();
    res.json(documents);
}));
app.get("/top3/:rank", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // gets top 3 posts title, body, likes, comments, views, multiple views
    const rank = req.params.rank;
    const collection = yield db.collection("top3Ranked");
    const result = yield collection.findOne({ rank });
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
}));
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map