export function managePresents(state = {numberOfPresents: 0}, action = { type: "INCREASE"})
{
  if(action.type === "INCREASE")
  {
    
    return Object.assign({}, state, {
      numberOfPresents: state.numberOfPresents + 1
    })
  }
  else
  {
    return state;
  }
};