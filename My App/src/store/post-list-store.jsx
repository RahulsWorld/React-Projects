import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addInitialPosts: () => {},
  deletePost: () => {},
  addPost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payLoad.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payLoad, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payLoad.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

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
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payLoad: {
        posts,
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
    <PostList.Provider
      value={{ postList, addInitialPosts, deletePost, addPost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

