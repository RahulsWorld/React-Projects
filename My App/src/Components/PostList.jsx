import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./welcomeMessage";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>};
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
