import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch ({
        type: 'FETCH_POSTS',
        payload: response.data
    });
}

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`users/${userId}`);
    dispatch ({
        type:'FETCH_USER',
        payload: response.data
    })
}


export const fetchUserOnce = (userId) => async dispatch => {
    _fetchUserOnce(userId, dispatch);
}

const _fetchUserOnce = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceholder.get(`users/${userId}`);
    dispatch ({
        type:'FETCH_USER',
        payload: response.data
    })
});