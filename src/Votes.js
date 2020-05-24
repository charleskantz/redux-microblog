import React from 'react';
import { useDispatch } from 'react-redux';
import { changeVoteAPI } from './actions';
import './Votes.css'

// Voting component - handles displaying and modifying votes for a post
function Votes({ voteCount, postId }) {
  const dispatch = useDispatch();
  let id = parseInt(postId);

  return (
    <div className="votesContainer" >
      <div className="votesButton" onClick={() => dispatch(changeVoteAPI(id, "up"))}>
        <i className="fa fa-hand-peace-o"></i>
      </div>
      <div className="votesCount">
        {voteCount} Votes
      </div>
    </div>
  )
}

export default Votes;