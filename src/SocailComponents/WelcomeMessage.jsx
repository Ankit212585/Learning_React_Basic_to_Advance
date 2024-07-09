const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center style={{ margin: 50 }}>
      <h1>There are No posts</h1>

      <button
        type="button"
        className="btn btn-primary"
        style={{ margin: 10 }}
        onClick={onGetPostsClick}
      >
        Click to Get all posts
      </button>
    </center>
  );
};
export default WelcomeMessage;
