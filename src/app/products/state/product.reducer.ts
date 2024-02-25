import {createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import * as ProductActions from "./product.actions"

import { Product } from '../model/product';

export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number,
  currentProduct: Product | null;
  products: Product[];
}

const initialState: ProductState = {
showProductCode: true,
currentProductId: 1,
currentProduct: null,
products: []
}

//selectors
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state=> state.showProductCode //projector function
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state=> state.currentProduct
)
export const getProducts = createSelector(
  getProductFeatureState,
  state=> state.products
)

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state=> state.currentProductId
)

//composing
// export const getCurrentProduct = createSelector(
//   getProductFeatureState,
//   getCurrentProductId,
//   (state, currentProductId) =>
//   state.products.find(p=> p.id === currentProductId)
// )



//reducer

export const productReducer = createReducer<ProductState>(

  initialState,

  on(ProductActions.toggleProductCode, (state): ProductState => {
    //handler code

    //return new state
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductActions.setCurrentProduct, (state,action):ProductState=>{
    return {
      ...state,
      currentProduct: action.product
    }
  }),
  on(ProductActions.clearCurrentProduct, (state):ProductState=>{
    return {
      ...state,
      currentProduct: null
    }
  }),
  on(ProductActions.initializeCurrentProduct, (state):ProductState=>{
    return {
      ...state,
      currentProduct: {
        id:0,
        name:'',
        productCode: 'New'
      }
    }
  })
);
