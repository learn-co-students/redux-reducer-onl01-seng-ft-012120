export function manageFriends(state = { friends: [] }, action){
    if(action.type === "ADD_FRIEND")
    {
        return Object.assign({}, state, {
            friends: [
                ...state.friends, 
                {
                    name: action.friend.name,
                    hometown: action.friend.hometown,
                    id: action.friend.id
                }
            ]
        })
    }
    else if(action.type === "REMOVE_FRIEND")
    {
        return Object.assign({}, state, {
            friends: state.friends.filter(friend => friend.id !== action.id)
        })
    }
    else
    {
        return state;
    }

}
