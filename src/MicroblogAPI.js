import axios from 'axios';
const BASE_URL = 'https://ck-microblog.herokuapp.com/api/posts/';

class MicroBlogAPI {
  static async getTitles() {
    try {
      const results = await axios.get(BASE_URL);
      return results.data;
    } catch (err) {
      console.error(err);
    }
  }

  // get a post
  static async getPost(postId) {
    try {
      const results = await axios.get(
        `${BASE_URL}/${postId}`
      );
      if ( !results.data ) {
        throw new Error("404 Not found.")}
      return results.data;
    } catch (err) {
      console.error(err);
    }
  }

  // create a post
  static async createPost(post) {
    try {
      const results = await axios.post(
        `${BASE_URL}`,
        post
        );
      return results.data;
    } catch (err) {
      console.error(err);
    }
  }

  // edit a post
  static async editPost(post) {
    try {
      const results = await axios.put(
        `${BASE_URL}/${post.id}`,
        post
      );
      return results.data;
    } catch (err) {
      console.error(err);
    }
  }

  // delete a post
  static async deletePost(postId) {
    try {
      const results = await axios.delete(
        `${BASE_URL}/${postId}`
      );
      return results.data;
    } catch (err) {
      console.error(err);
    }
  }

  // get comments for a post
  static async getComments(postId) {
    try {
      const results = await axios.get(
        `${BASE_URL}/${postId}/comments`
      );
      return results.data;
    } catch (err) {
      console.error(err);
    }
  }

  // add a comment
  static async createComment(postId, comment) {
    try {
      const results = await axios.post(
        `${BASE_URL}/${postId}/comments`,
        {text: comment}
      );
      return results.data;
    } catch (err) {
      console.error(err);
    }
  }
  // delete a comment
  static async deleteComment(postId, commentId) {
    try {
      const results = await axios.delete(
        `${BASE_URL}/${postId}/comments/${commentId}`,
      );
      return results.data;
    } catch (err) {
      console.error(err);
    }
  }

  // Change vote on a post
  static async changeVote(postId, direction) {
    try {
      const result = await axios.post(
        `${BASE_URL}/${postId}/vote/${direction}`,
      );
      return result.data.votes;
    } catch (err) {
      console.error(err);
    }
  }



}

export default MicroBlogAPI;

// getTitles
