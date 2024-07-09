import React, { useContext } from "react";
import { PostList } from "../SocialStore/SocialPostlist";
import { MdDelete } from "react-icons/md";
import WelcomeMessage from "./WelcomeMessage";

export default function Card() {
  const { postList, addInitialPosts, DeletePost } =
    useContext(PostList);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((item) => (
        <div
          key={item.id}
          className="card"
          style={{ Width: "22rem", margin: "50px" }}
        >
          <div className="card-body">
            <h5 className="card-title">
              {item.title}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => DeletePost(item.id)}
              >
                <MdDelete />
              </span>
            </h5>
            <p className="card-text">{item.body}</p>
            {item.tags.map((item1) => (
              <a
                key={item1}
                style={{ margin: "10px" }}
                href="#"
                className="btn btn-primary"
              >
                {item1}
              </a>
            ))}
            <div className="alert alert-primary" role="alert">
              This post has been reacted by {item.reactions} people
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
