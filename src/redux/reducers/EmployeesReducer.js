export default (state = {}, action) => {
  switch(action.type) {
    case "fetch_employees":
      return action.payload
    break
    default:
      return state
  }
}