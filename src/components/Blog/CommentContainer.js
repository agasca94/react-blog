import React from 'react';
import { connect } from 'react-redux';
import {
    saveComment, 
    deleteComment
} from 'actions/post';
import CommentCard from './CommentCard';

function CommentCardContainer({ postId, comment, author, currentUser, deleteComment, saveComment }) {
    const isEditable = author.id === currentUser?.id;

    const onSave = (contents) => 
        saveComment(postId, { contents }, comment.id);

    const onDelete = () => 
        deleteComment(postId, comment.id)

    return (
        <CommentCard 
            editable={isEditable}
            comment={comment}
            author={author}
            onSave={onSave}
            onDelete={onDelete}
        />
    )
}

const mapStateToProps = ({ users, comments, auth }, ownProps) => {
    const comment = comments.data.byId[ownProps.id];
    const author = users.data.byId[comment.author];
    const { currentUser } = auth.data;

    return {
        comment, 
        author,
        currentUser
    }
}

export default connect(
    mapStateToProps,
    { saveComment, deleteComment }
)(CommentCardContainer);
