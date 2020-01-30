import React from 'react';
import { connect } from 'react-redux';
import PostContainer from './PostContainer';

function PostListContainer({ postsIds }) {
    return (
        <React.Fragment>
            {postsIds.map(postId => 
                <PostContainer 
                    key={postId}
                    id={postId}
                />
            )}
        </React.Fragment>
    );
}

const mapStateToProps = ({ posts, profile }, ownProps) => {
    const { source } = ownProps;
    let postsIds = [];
    if (source === 'allIds') {
        postsIds = posts.data.allIds;
    } else if (source === 'favoritesIds') {
        postsIds = profile.data.favoritesIds;
    } else if (source === 'ownedIds') {
        postsIds = profile.data.ownedIds;
    }

    return {
        postsIds
    }
}

export default connect(
    mapStateToProps
)(PostListContainer);
