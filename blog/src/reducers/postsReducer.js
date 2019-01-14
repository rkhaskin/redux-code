export default (state = [], action) => {
  console.log("Action Type", action.type);
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
