import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import PostForm from './PostForm';
import CommentList from './CommentList';


/** Displays information about a post and provides a way to edit and delete it
 * 
 * Props:
 *    posts -> array of posts from App state
 *    editPost -> state setter from App component
 *    deletePost -> state setter from App component
 * 
 * State:
 *    editMode -> toggles the display of the PostForm component
*/

function PostPage({ posts, editPost, deletePost, addComment, deleteComment }) {

  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  const post = posts.find(p => p.id === id);
  if (!post) return <Redirect to="/" />;

  const { title, description, body, comments } = post;

  const postBody = editMode 
    ? <PostForm 
        id={id} 
        formData={post} 
        toggleEditMode={toggleEditMode} 
        submitData={editPost} 
      /> 
    : (<div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{body}</p>
      </div>);

  function toggleEditMode() {
    setEditMode(edit => !edit);
  }


  return (
    <div className="PostPage">
      <div>
        <button onClick={toggleEditMode}>Edit</button>
        <button onClick={() => deletePost(id)}>Delete</button>
      </div>
      {postBody}
      <hr />
      <CommentList postId={id} comments={comments} addComment={addComment} deleteComment={deleteComment} />
    </div>
  )
}

export default PostPage;