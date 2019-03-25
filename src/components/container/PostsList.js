import React, { Component } from 'react';
import { fetchPosts } from '../../store/actions/posts-actions';
import { connect } from 'react-redux';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return this.props.posts.map(post => {
      return (
        <div className="description" key={post.id}>
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

export default connect(mapStateToProps, { fetchPosts })(PostsList);