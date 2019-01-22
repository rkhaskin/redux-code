// Actions
const LOAD   = 'blog/user_duck/LOAD';
const CREATE = 'blog/user_duck/CREATE';
const UPDATE = 'blog/user_duck/UPDATE';
const REMOVE = 'blog/user_duck/REMOVE';

const initialState = {
    resources: {
        users: []
    }
} 
// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
        return { ...state, 
                resources: {...state.resources},
                users: [...state.resources.users, action.payload]
        }

    default: return state;
  }
}

// Action Creators
export function loadUser() {
  return { type: LOAD };
}

// export function createUser(User) {
//   return { type: CREATE, User };
// }

// export function updateUser(User) {
//   return { type: UPDATE, User };
// }

// export function removeUser(User) {
//   return { type: REMOVE, User };
// }

export function loadUsers(posts) {
    return (dispatch) => {
        return dispatch(fetchUsers(posts));
    }
}