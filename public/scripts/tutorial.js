class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
}

class CommentFrom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentFrom">
        Hello, world! I am a CommentFrom.
      </div>
    );
  }
}

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList/>
        <CommentFrom/>
      </div>
    );
  }
}



ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
