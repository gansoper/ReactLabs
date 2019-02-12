/**
 * Created by Tirion on 08.02.2019.
 */
import React from 'react'
import PropTypes from 'prop-types'

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

export default Comment;