import React from 'react';
import {render} from 'react-dom';

var CommentBox = React.createClass({

  render: function() {
    return (
      <div className="commentBox">
        Hello, world!!
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
