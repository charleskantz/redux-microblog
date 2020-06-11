import React from 'react';
import { Link } from 'react-router-dom';
import './PostListItem.css';

/** Presentational Component that provides a link to a post
 *
 * Props:
 *    id, title, description -> info about post
 */

function PostListItem({ id, title, description, votes, photoUrl }) {

  const style = {
    backgroundImage: `url('${photoUrl}')`
  }


  return (
    <div className="PostListItem">
      <Link to={`/${id}`}>
        <div className="postListItemImg" style={style} ></div>
      </Link>
      <Link to={`/${id}`}>
        {title}
      </Link>
      <h3 className="postListItemDesc">{description}</h3>
      <div className="postCommentUserInfo" >
        <div className="postCommentFormAvatar" ></div>
        <div className="postCommentUsername" >Anonymous User</div>
      </div>
    </div>
  )
}

export default PostListItem;