import React from 'react';
import { Component } from 'react';
import {fetchUserOnce} from '../actions'
import {connect } from 'react-redux';

class UserHeader extends Component {
    componentDidMount = () => {
        this.props.fetchUserOnce(this.props.userId);
    }
    render() {
        const {user} = this.props;
        return (
            <div className="header">
                {(user) ? user.name : null}
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find((user) => user.id===ownProps.userId)};
}


export default connect(mapStateToProps, {fetchUserOnce})(UserHeader);