/**
 * Created by Tirion on 11.02.2019.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'


class CommentForm extends Component {

    static defaultProps = {
        inputAlertClassName: "alertInput"
    }

    state = {
        userName: '',
        commentText: '',
        userFieldClass: null,
        commentFieldClass: null
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div className="formDiv">
                        <div>User</div>
                        <input type="text" value={this.state.userName} className={this.state.userFieldClass}
                               onChange={this.onUserFieldChange}/>
                    </div>
                    <div className="formDiv">
                        <div>Comment Text</div>
                        <textarea rows="10" value={this.state.commentText} onChange={this.onUserTextChange}
                                  className={this.state.commentFieldClass}/>
                    </div>
                    <div className="formDiv">
                        <input type="submit" value="submit"/>
                    </div>
                </form>
            </div>
        );
    }

    submitForm = (ev) => {
        ev.preventDefault();
        this.setState({
            userName: '',
            commentText: '',
            userFieldClass: null,
            commentFieldClass: null
        })
    }

    onUserFieldChange = (ev) => {

        let {inputAlertClassName} = this.props;
        this.setState({
            userName:ev.target.value,
            userFieldClass : ev.target.value.length > 15 || ev.target.value.length < 5 ? inputAlertClassName: null
        })


    }

    onUserTextChange = (ev) => {
        let {inputAlertClassName} = this.props;
        this.setState({
            commentText:ev.target.value,
            commentFieldClass : ev.target.value.length < 20 || ev.target.value.length> 50 ? inputAlertClassName: null
        })
    }


}

export default CommentForm;
