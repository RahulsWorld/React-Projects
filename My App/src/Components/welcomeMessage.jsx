const WelcomeMessage = ({ GetPosts }) => {
  return (
    <center>
      <h2 className="Message">
        There are no Post . Add some Posts By 'Create Post' Option in SideBar
      </h2>

      <button type="button" className="btn btn-primary" onClick={GetPosts}>
        Get Post from server
      </button>
    </center>
  );
};
export default WelcomeMessage;
