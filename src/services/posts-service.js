import Service from './service';

class PostsService extends Service {
  getPosts() {
    return this.get('/posts');
  }
}

export default PostsService;