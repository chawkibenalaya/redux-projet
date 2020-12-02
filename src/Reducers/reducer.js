const initialState= {
       voitures :[]
}
const reducer = (state= initialState, action) =>{
       switch(action.type){
              case"ADD_VOITURE":
                     return {
                            ...state,
                            voitures:[...state.voitures, action.payload]
                     };
              default:
                     return state;
       }
}
export default reducer;