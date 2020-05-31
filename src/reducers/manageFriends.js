export function manageFriends(state = {friends: []}, action){
    let allFriends = state.friends
    switch(action.type){
       case "ADD_FRIEND":    
       allFriends.push(action.friend)
           return {friends: allFriends} 
       case "REMOVE_FRIEND":
           return{friends: allFriends.filter(friend => {
               console.log(action)
               if (friend.id !== action.id){
                   return friend
               }
           }) }
       default:
           return state
   } 
}
