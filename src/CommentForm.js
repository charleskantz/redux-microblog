import React, { useState } from 'react';
import './CommentForm.css';

/** Displays a form to add a new comment to a post
 * 
 * Props:
 *    addComment -> parent function that dispatches addComment action
 * 
 * State:
 *    message -> current input data
 */

function CommentForm({ addComment }) {

  const [message, setMessage ] = useState('')

  const handleChange = evt => {
    setMessage(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addComment(message);
    setMessage('');
  }

  return (
    <div className="commentCard" >
      <div className="postCommentUserInfo" >
        <div className="postCommentFormAvatar" ></div>
        <div className="postCommentUsername" >Anonymous User</div>
      </div>

      <form onSubmit={handleSubmit} >
        <textarea
          name="newMessage"
          placeholder="sdfddfsdfsdf sdfddfsdfsdf sdfddfsdfsdf sdfddfsdfsdf sdfddfsdfsdf sdfddfsdfsdf"
          value={message}
          onChange={handleChange}
          className="postCommentFormTextArea"
          rows="1"
          cols="90"
        ></textarea><br />
        <button className="postCommentSubmit">Publish</button>
      </form>
    </div>
  )
}

export default CommentForm;