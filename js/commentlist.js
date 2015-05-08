var CommentList = React.createClass({
  render: function() {
  	console.log(this.props.data)
  	var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });	
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
 