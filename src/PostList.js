import React from 'react';
import { useSelector } from 'react-redux';
import './PostList.css';

import PostListItem from './PostListItem';

/** Displays a list of titles as PostListItem components 
 * 
 * Redux:
 *    titles -> title objects representing each post
*/

function PostList() {

  const titles = useSelector(st => st.titles);

  function renderPostListItems() {

    console.log("RENDERED THE LIST!")

    return titles.map(t => ( 
      <PostListItem 
        key={t.id} 
        id={t.id} 
        title={t.title} 
        description={t.description}
        photoUrl={t.photo_url}
        votes={t.votes}
      />
    ));
  }

  return (
    <div className="postList">
      {renderPostListItems()}
    </div>
  )
}

export default PostList;