/**
 * Created by Tirion on 08.02.2019.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {extractedCommentSelectorFactory} from '../selectors'

function Comment({comment}) {

    return (
        <div>
            <strong>{comment.user}</strong>
            <p>{comment.text}</p>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string
    })
}

const mapStateToProps = () => {
    const extractedCommentSelector = extractedCommentSelectorFactory();

    return (state, ownProps) => {
        return {comment: extractedCommentSelector(state, ownProps)}
    }
}

export default connect(mapStateToProps)(Comment);