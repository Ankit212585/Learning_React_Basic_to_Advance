import React, { useContext, useRef } from "react";
import { PostList } from "../SocialStore/SocialPostlist";

export default function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const titleElement = useRef();
  const BodyElement = useRef();
  const reactionsElement = useRef();
  const TagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = BodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = TagsElement.current.value.split(" ");

    userId.current.valu = "";
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";

    addPost(userId, title, body, reactions, tags);
  };
  return (
    <>
      <div style={{ margin: 50 }}>
        <form onClick={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userIdElement" className="form-label">
              User ID
            </label>
            <input
              ref={userIdElement}
              type="text"
              className="form-control"
              id="userIdElement"
              placeholder="Enter your user ID"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="titleElement" className="form-label">
              Post Title
            </label>
            <input
              ref={titleElement}
              type="Text"
              className="form-control"
              id="titleElement"
              placeholder="How was your feeling Today"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="BodyElement" className="form-label">
              Post Content
            </label>
            <textarea
              ref={BodyElement}
              type="text"
              rows={4}
              className="form-control"
              id="BodyElement"
              placeholder="Your Content"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reactionsElement" className="form-label">
              Number of Reactions
            </label>
            <input
              ref={reactionsElement}
              type="text"
              className="form-control"
              id="reactionsElement"
              placeholder="How many people Reactions this post"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="TagsElement" className="form-label">
              Post Title
            </label>
            <input
              ref={TagsElement}
              type="text"
              className="form-control"
              id="TagsElement"
              placeholder="Enter your Tags"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    </>
  );
}
