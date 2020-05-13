import React from 'react';
import { Component } from 'react';
import {fetchUser} from '../actions'
import {connect } from 'react-redux';

class UserHeader extends Component {
    componentDidMount = () => {
        this.props.fetchUser(this.props.userId);
    }
    render() {
        const user = this.props.users.find((user) => {
            return this.props.userId===user.id
        })
        return (
            <div>
                {(user) ? user.name : null}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {users: state.users};
}


export default connect(mapStateToProps, {fetchUser})(UserHeader);