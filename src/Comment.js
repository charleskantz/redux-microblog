import React from 'react';
import './Comment.css';

/** Displays a comment with a button to remove itself from its parent
 * post object
 * 
 * Props:
 *    id, message -> info about the comment
 *    removeComment -> parent function that dispatches the removeComment action
 */

function Comment({ message, removeComment, id }) {

  return (
    <div className="commentCard">
       <div className="postCommentUserInfo" >
        <div className="postCommentFormAvatar" ></div>
        <div className="postCommentUsername" >Anonymous User</div>
      </div>
      <div className="commentBody" >
        {message}
      </div>
      <div className="commentFooter">
        <i className="fa fa-window-close commentDelete" onClick={() => removeComment(id)} ></i>
      </div>
    </div>
  )

}

export default Comment;