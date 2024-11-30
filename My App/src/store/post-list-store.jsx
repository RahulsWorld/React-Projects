import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payLoad.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payLoad, ...currPostList];
  }

  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_LISt
  );

  const addPost = (userID, postTitle, postBody, Reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payLoad: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        Reaction: Reaction,
        userID: userID,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payLoad: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_LISt = [
  {
    id: "1",
    title: "Mumbai Trip",
    body: "Habibi Come to DUbai ",
    Reaction: 34,
    userID: "",
    tags: ["Mumbai", "Taj", "Beach"],
  },
  {
    id: "2",
    title: "Pass BTech",
    body: "Its a beautiful Journey of 4 years ",
    Reaction: 255,
    userID: "",
    tags: ["College", "Bunks", "Canteen"],
  },
];
export default PostListProvider;
