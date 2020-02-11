import React from 'react';
import { connect } from 'react-redux';
import { saveComment } from 'actions/post';
import CommentContainer from './CommentContainer';
import CommentForm from './CommentForm';

function CommentListContainer({ comments, postId, currentUser, saveComment }) {
    
    const onSave = contents => 
        saveComment(postId, { contents });

    return (
        <React.Fragment>
            {currentUser &&
                <CommentForm currentUser={currentUser} onPost={onSave}/>
            }

            {comments.map(id => 
                <CommentContainer
                    key={id}
                    id={id}
                    postId={postId}
                />
            )}
        </React.Fragment>
    );
}

const mapStateToProps = ({ comments, auth }) => ({
    comments: comments.data.allIds,
    currentUser: auth.data.currentUser
})

export default connect(
    mapStateToProps,
    { saveComment }
)(CommentListContainer);
