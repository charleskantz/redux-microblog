import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getPostAPI, deletePostAPI } from './actions';
import './PostPage.css';

import PostForm from './PostForm';
import CommentList from './CommentList';
import Votes from './Votes';


/** Displays information about a post and provides a way to edit and delete it
 * 
 * State:
 *    editMode -> toggles the display of the PostForm component
 * 
 * Redux:
 *    posts -> main posts object
 * 
 * Dispatch:
 *    deletePost
*/

function PostPage() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(st => st.posts[id], shallowEqual);
  // const isLoading = useSelector(st => st.isLoading);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();


  useEffect(() => {
    if (!post || !post.id) {
      dispatch(getPostAPI(id));
    }else {
      setIsLoading(false);
    }
  }, [post, dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  /*****************************************************************************************
  * 		ASK ABOUT: Async redirect if page not found		
  *****************************************************************************************/
 // if (!post) { return <Redirect to="/" />; }

 const DEFAULT_IMG = 'https://www.linux.com/wp-content/uploads/2019/08/minimal_0.jpg'

  const { title, description, body, comments, votes, photo_url } = post;

  const postBody = editMode 
    ? <PostForm 
        id={id} 
        formData={post} 
        toggleEditMode={toggleEditMode} 
      /> 
    : (<div className="postBody">
        <img
          src={photo_url ? photo_url : DEFAULT_IMG}
          alt={`${title}`}
          className="postBodyImg"
        />
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="postCommentUserInfo" >
          <div className="postCommentFormAvatar" ></div>
          <div className="postCommentUsername" >Anonymous User</div>
        </div>
        <p>{body}</p>
      </div>);

  function toggleEditMode() {
    setEditMode(edit => !edit);
  }

  async function deletePost(id) {
    dispatch(deletePostAPI(id));
    history.push('/');
  }

  return (
    <div className="postPage">
      {postBody}
      <div className="postPageOptions">
        <Votes voteCount={votes} postId={id} />
        <div>
          <Link className="postOptions" onClick={toggleEditMode}>Edit</Link>
          <Link className="postOptions postDanger" onClick={() => deletePost(parseInt(id))}>Delete</Link>
        </div>
      </div>
      <CommentList postId={id} comments={comments} />
    </div>
  )
}

export default PostPage;