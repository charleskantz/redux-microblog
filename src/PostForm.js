import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPostAPI, editPostAPI } from './actions';
import './PostForm.css';
import TextareaAutosize from 'react-textarea-autosize';

/** Displays a form to create a new post
 *
 * Props:
 *    id -> post id (if editing post)
 *    formData -> form data to populate the form (if editing post)
 *    toggleEditMode -> PostPage state setter function to toggle edit form
 *
 * State:
 *    form -> input data
 *
 * Dispatches:
 *    editPost, addPost
 */

const INITIAL_STATE = {
  title: "",
  description: "",
  body: ""
}

function PostForm({ id, formData = INITIAL_STATE, toggleEditMode }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(formData);

  function handleSubmit(evt) {
    evt.preventDefault();

    // if we are editing, we have an existing id
    if (id) {
      dispatch(editPostAPI(form));
      toggleEditMode();
    } else {
      dispatch(addPostAPI(form));
      history.push('/'); // take user away from page that was just deleted
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <div className="postFormContainer">
      <form onSubmit={handleSubmit}>
      <button className="postBtn postSaveBtn">Save</button>
        {id
          ? <button className="postBtn postCancelBtn" onClick={toggleEditMode}>Cancel</button>
          : <Link to="/">Cancel</Link>
        }
        <div>
          <TextareaAutosize
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
          >
          </TextareaAutosize>
        </div>

        <div>
          <TextareaAutosize
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
          >
          </TextareaAutosize>
        </div>

        <div>
          <TextareaAutosize
            name="body"
            id="body"
            value={form.body}
            onChange={handleChange}
            placeholder="Tell your story..."
          >
          </TextareaAutosize>
        </div>
      </form>
    </div>
  )
}

export default PostForm;