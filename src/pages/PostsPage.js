import React, { Component } from 'react';
import { fetchPosts } from '../store/actions/posts-actions';
import { connect } from 'react-redux';

class PostsPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return this.props.posts.map(post => {
      return (
        <div className="description">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsPage);
