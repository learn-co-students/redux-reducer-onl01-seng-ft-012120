export function manageFriends(state={friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return ({...state,  friends: [...state.friends, action.friend]})
        case "REMOVE_FRIEND": 
            // let idx = state.friends.findIndex(friend => friend.id === action.id)
            return  (
                Object.assign({}, state, {
                    friends: state.friends.filter(friend => friend.id !== action.id)
                })
            )
        default: 
            return state
    }
}
