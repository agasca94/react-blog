import React from 'react';
import { connect } from 'react-redux';
import { favoritePost } from 'actions/post';
import PostPreview from './PostPreview';

function PostContainer({ post, author, favoritePost, currentUser }) {
    const onFavorite = () => 
        favoritePost(post)
    
    return (
        <PostPreview
            post={post}
            author={author}
            currentUser={currentUser}
            favoritePost={onFavorite}
        />
    )
}

const mapStateToProps = ({ posts, users, auth }, ownProps) => {
    const post = posts.data.byId[ownProps.id];
    const author = users.data.byId[post.author];
    const currentUser = auth.data.currentUser;

    return {
        post,
        author,
        currentUser
    }
}

export default connect(
    mapStateToProps,
    { favoritePost }
)(PostContainer)
