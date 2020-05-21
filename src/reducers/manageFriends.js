export function manageFriends(state, action) {
  switch (action.type) { 
    case "ADD_FRIEND":
      return { friend: Object.assign({}, state.friends, action.type.friend) }
    default:
      return state;
  }
}
