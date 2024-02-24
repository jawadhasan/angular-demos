import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';

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

// export const getCurrentProduct = createSelector(
//   getProductFeatureState,
//   state=> state.currentProduct
// )
export const getProducts = createSelector(
  getProductFeatureState,
  state=> state.products
)

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state=> state.currentProductId
)

//composing
export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) =>
  state.products.find(p=> p.id === currentProductId)
)



//reducer

export const productReducer = createReducer<ProductState>(
 initialState,

  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    //handler code

    //return new state
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);