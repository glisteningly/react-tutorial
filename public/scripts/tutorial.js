const data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  rawMarkup() {
    let md = new Remarkable();
    let rawMarkup = md.render(this.props.children.toString());
    return {__html: rawMarkup};
  }

  render() {
    // let md = new Remarkable();
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}/>
      </div>
    );
  }
}

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    });


    return (
      <div className="commentList">
        {commentNodes}
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
        <CommentList data={this.props.data}/>
        <CommentFrom/>
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);
