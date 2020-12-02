import {createStore} from "redux"
import reducer from '../Reducers/reducer'
 const initialState = {
     voiture: {
         id:'1',
         name:'test',
         puissance:'5',
         description:'test test'
     }
 }
 const store = createStore(reducer, initialState)
 export default store;
