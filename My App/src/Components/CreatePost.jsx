import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const ReactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userID = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const Reaction = ReactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    ReactionElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userID, postTitle, postBody, Reaction, tags);
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="User Id"
          placeholder="Enter Your User Id"
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are You feeling today Sir."
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="title"
          placeholder="Tell us More about it"
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="Reaction" className="form-label">
          Number Of Reaction
        </label>
        <input
          type="text"
          ref={ReactionElement}
          className="form-control"
          id="Reaction"
          placeholder="People React to this Post"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="tags" className="form-label">
          Enter Your Hash Tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter your HashTags here"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
