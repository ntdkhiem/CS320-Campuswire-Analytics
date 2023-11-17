import React from "react";
import "./trends.css";

const Trends = (props) => {
  const posts = [
    {
      id: 12,
      title: "[IMPORTANT] Midterm 2 Exam Information",
      content:
        "Hi everyone,\nAs you all know, Midterm 2 will be on Wednesday, October 25 from 7-9pm. It will cover bipartite testing (somewhere in Lecture 6), topological orders/sorting, greedy algorithms, Dijkstra, Kruskal/Prim, and the first two lectures of divide and conquer (so the lectures covered this week). It will be a similar format to the first exam.",
      likes: 69,
      comments: 25,
      post_views: 420,
      user_views: 96,
    },
    {
      id: 12,
      title: "[IMPORTANT] Midterm 2 Exam Information",
      content:
        "Hi everyone,\nAs you all know, Midterm 2 will be on Wednesday, October 25 from 7-9pm. It will cover bipartite testing (somewhere in Lecture 6), topological orders/sorting, greedy algorithms, Dijkstra, Kruskal/Prim, and the first two lectures of divide and conquer (so the lectures covered this week). It will be a similar format to the first exam.",
      likes: 69,
      comments: 25,
      post_views: 420,
      user_views: 96,
    },
    {
      id: 12,
      title: "[IMPORTANT] Midterm 2 Exam Information",
      content:
        "Hi everyone,\nAs you all know, Midterm 2 will be on Wednesday, October 25 from 7-9pm. It will cover bipartite testing (somewhere in Lecture 6), topological orders/sorting, greedy algorithms, Dijkstra, Kruskal/Prim, and the first two lectures of divide and conquer (so the lectures covered this week). It will be a similar format to the first exam.",
      likes: 69,
      comments: 25,
      post_views: 420,
      user_views: 96,
    },
  ];

  return (
    <div className="posts list-group">
      {posts.map((post, index) => (
        <button
          key={post.id}
          href="#"
          className={`list-group-item list-group-item-action d-flex gap-3 py-3 no-border ${
            index < posts.length - 1 ? "post-border" : ""
          }`}
        >
          <div>
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">{post.title}</h6>
                <p
                  className="mb-0 opacity-75"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
                ></p>
              </div>
              <small className="opacity-50 text-nowrap">#{post.id}</small>
            </div>
            <div className="interact d-flex gap-2 w-100">
              <button>
                <i className="bi bi-hand-thumbs-up">
                  <span className="count"> {post.likes}</span>
                </i>
              </button>
              <button>
                <i className="bi bi-chat">
                  <span className="count"> {post.comments}</span>
                </i>
              </button>
              <button>
                <i className="bi bi-eye">
                  <span className="count"> {post.post_views}</span>
                </i>
              </button>
              <button>
                <i className="bi bi-people">
                  <span className="count"> {post.user_views}</span>
                </i>
              </button>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
export default Trends;
