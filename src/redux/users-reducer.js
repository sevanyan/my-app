const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize:10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true

};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS: {
            return {   ...state, users: action.users }
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage:action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount:action.count }
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching:action.isFetching }
        }

        default :
            return state;
    }
}

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer ;