import { CartActionTypes } from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...INITIAL_STATE,
        hidden: ! state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...INITIAL_STATE,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer