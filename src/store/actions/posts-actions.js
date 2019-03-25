import PostsService from './../../services/posts-service';

export const fetchPosts = () => async dispatch => {
  const postsService = new PostsService();
  const response = await postsService.getPosts();
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
