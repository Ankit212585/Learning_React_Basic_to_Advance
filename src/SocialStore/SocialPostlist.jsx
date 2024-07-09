import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  DeletePost: () => {},
});

const PostlistReducer = (currentpostlist, action) => {
  let newpostlist = currentpostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = currentpostlist.filter(
      (post) => post.id !== action.payload.postList
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newpostlist = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newpostlist = [action.payload, ...currentpostlist];
  }
  return newpostlist;
};
const MyPostList = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(
    PostlistReducer,
    Thisposts
  );

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostlist({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const DeletePost = (postList) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postList,
      },
    });
    // console.log(`Delete post ${postList}`);
  };
  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, DeletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const Thisposts = [];
export default MyPostList;
