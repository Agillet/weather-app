const reducer = (state = {data: null, loading: false}, action) => {
  switch (action.type) {
    case 'REQUEST_WEATHER':
      return {...state, loading: true};
    case 'RECEIVE_WEATHER':
      return {...state, data: action.payload, loading: false};
    default:
      return state;
  }
};
export default reducer;
