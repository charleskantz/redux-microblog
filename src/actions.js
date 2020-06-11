import {
  GET_TITLES,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  START_LOAD,
  END_LOAD,
  CHANGE_VOTE
} from './actionTypes';
import MicroBlogAPI from './MicroblogAPI';

// Get All Titles Thunk
export function getTitlesAPI() {
  return async function(dispatch) {
    let allTitles = await MicroBlogAPI.getTitles();
    dispatch(getTitles(allTitles));
  };
}

function getTitles(titles) {
  return {
    type: GET_TITLES,
    titles
  }
}

// Get Single Post Thunk
export function getPostAPI(postId) {
  return async function(dispatch) {
    try {
      let post = await MicroBlogAPI.getPost(postId);
      dispatch(getPost(post));
    } catch (err) {
      console.log(err);
    }
  };
}

function getPost(post) {
  return {
    type: GET_POST,
    post
  }
}
// Add Post Thunk
export function addPostAPI(post) {
  return async function(dispatch) {
    let newPost = await MicroBlogAPI.createPost(post);
    dispatch(addPost(newPost));
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}
// Edit Post Thunk
export function editPostAPI(post) {
  return async function(dispatch) {
    let editedPost = await MicroBlogAPI.editPost(post);
    dispatch(editPost(editedPost));
  };
}

function editPost(post) {
  return {
    type: EDIT_POST,
    post
  }
}

// Delete Post Thunk
export function deletePostAPI(postId) {
  return async function(dispatch) {
    await MicroBlogAPI.deletePost(postId);
    dispatch(deletePost(postId));
  };
}

function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

// Get Comments Thunk (not used)
export function getCommentsAPI(postId) {
  return async function(dispatch) {
    let comments = await MicroBlogAPI.getComments(postId);
    dispatch(getComments(postId, comments));
  };
}

function getComments(postId, comments) {
  return {
    type: GET_COMMENTS,
    postId,
    comments
  }
}

// Create Comment Thunk
export function createCommentAPI(postId, comment) {
  return async function(dispatch) {
    let newComment = await MicroBlogAPI.createComment(postId, comment);
    dispatch(createComment(postId, newComment));
  };
}

function createComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  }
}

// Delete Comment Thunk
export function deleteCommentAPI(postId, commentId) {
  return async function(dispatch) {
    await MicroBlogAPI.deleteComment(postId, commentId);
    dispatch(deleteComment(postId, commentId));
  };
}

function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  }
}

// Change Vote Thunk
export function changeVoteAPI(postId, direction) {
  return async function(dispatch) {
    let votes = await MicroBlogAPI.changeVote(postId, direction);
    dispatch(changeVote(parseInt(postId), votes));
  };
}

function changeVote(postId, votes) {
  return {
    type: CHANGE_VOTE,
    postId,
    votes
  }
}





export function startLoad() {
  return { type: START_LOAD };
}

export function endLoad() {
  return { type: END_LOAD };
}