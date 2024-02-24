import { createAction, createReducer, on } from "@ngrx/store";

export const productReducer = createReducer(

  { showProductCode: true },

  on(createAction('[Product] Toggle Product Code'), state =>{

    //handler code
    //console.log('before state',JSON.stringify(state));

    //return new state
    return {
      ...state,
      showProductCode: !state.showProductCode
    };

  }))

