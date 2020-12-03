const initialState = {
  voitures: [],
};
const reducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case "ADD_VOITURE":
      return {
        ...state,
        voitures: state.voitures.concat(action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
