import React from "react";
import "./trends.css";

const resFirst = await fetch('http://localhost:3001/top3/first')
const first = await resFirst.json();

const resSecond = await fetch('http://localhost:3001/top3/second')
const second = await resSecond.json();

const resThird = await fetch('http://localhost:3001/top3/third')
const third = await resThird.json();

const Trends = (props) => {
const posts = [
    {
      id: first.id,
      title: first.title,
      content: first.body,
      likes: first.likes,
      comments: first.comments,
      post_views: first.views,
      user_views: first.uniqueViews,
    },
    {
      id: second.id,
      title: second.title,
      content: second.body,
      likes: second.likes,
      comments: second.comments,
      post_views: second.views,
      user_views: second.uniqueViews,
    },
    {
      id: third.id,
      title: third.title,
      content: third.body,
      likes: third.likes,
      comments: third.comments,
      post_views: third.views,
      user_views: third.uniqueViews,
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
