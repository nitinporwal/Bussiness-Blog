import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchUsers } from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchUsers();
    }
    renderedPosts = () => {
        let c=0;
        return this.props.posts.map((post) => {
            const user=this.props.users.filter((u) => {
                return u.id===post.userId
            })
            console.log(user[0], c++);
            return (
                <div className= "item" key={post.id} >
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div className="author">
                            {(user) ? user[0].name: null}
                        </div>
                    </div>
                </div>
            )

        })
    }
    render() {
        // console.log(this.props.users);
        return (
            <div className="ui relexed divided list">
                {this.renderedPosts()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { posts: state.posts, users: state.users }
}

export default connect(mapStateToProps, {fetchPosts, fetchUsers})(PostList);