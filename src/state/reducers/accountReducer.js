const initialState = 0;

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
