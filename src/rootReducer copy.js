import {
  GET_TITLES,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_VOTE
} from './actionTypes';

const INITIAL_STATE = {
  posts: {},
  titles: [],
  isLoading: true
}

/*
 redux structure for backend integration:

 {
   posts: { post pages we have visted }
   title: { id,title,description,votes received from backend }
 }

   - ADDING NEW POST
      - add a comments array
      - add to posts
      - add smaller data set to titles
  - REMOVING A POST
      - remove from posts
      - remove from titles
  - EDITING A POST
      - edit post in-place
      - edit titles in-place
 - adding/removing a comment will update the post in posts
*/

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_TITLES:
      action.titles.sort((a,b) => b.votes - a.votes);

      return {
        ...state,
        titles: [
          ...action.titles
        ]
      };

    case GET_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.post.id]: {
            ...action.post
          }
        }
      };

      case ADD_POST:
        return {
          ...state,
          posts: {
            ...state.posts,
            [action.post.id]: {
              ...action.post,
              comments: []
            }
          },
          titles: [
            ...state.titles,
            {
              id: action.post.id,
              title: action.post.title,
              description: action.post.description,
              votes: action.post.votes,
            }
          ]
        }

      case EDIT_POST:
        const titlesToEdit = [...state.titles];
        let editedTitle = titlesToEdit.find(t => t.id === action.post.id);

        editedTitle.title = action.post.title;
        editedTitle.description = action.post.description;
        editedTitle.votes = action.post.votes;

        return {
          ...state,
          posts: {
            ...state.posts,
            [action.post.id]: {
              ...state.posts[action.post.id],
              ...action.post
            }
          },
          titles: titlesToEdit
        }

    case DELETE_POST:
      const postsCopy = { ...state.posts };
      delete postsCopy[action.postId];
      const filteredTitles = state.titles.filter(t => t.id !== action.postId )

      return {
        ...state,
        posts: postsCopy,
        titles: filteredTitles
      }

    case GET_COMMENTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: action.comments
          }
        }
      };

    case ADD_COMMENT:
      const updatedPost = state.posts[action.postId];
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...updatedPost,
            comments: [...updatedPost.comments, action.comment]
          }
        }
      }

    case DELETE_COMMENT:
      const postCopy = { ...state.posts[action.postId] };
      postCopy.comments = postCopy.comments.filter(c => c.id !== action.commentId);

      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: postCopy
        }
      };

      case CHANGE_VOTE:
        const titlesCopy = [...state.titles];
        const newTitle = titlesCopy.find(t => t.id === action.postId);
        newTitle.votes = action.votes;
        titlesCopy.sort((a,b) => b.votes - a.votes);
        return {
          ...state,
          posts: {
            ...state.posts,
            [action.postId]: {
              ...state.posts[action.postId],
              votes: action.votes
            }
          },
          titles: titlesCopy
        }

    default:
      return state;
  }
}

export default rootReducer;
