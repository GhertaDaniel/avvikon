import { cartSlice } from '../cart/cart.slice'
import * as userActions from './user.actions'

export const rootActions = { ...userActions, ...cartSlice.actions }
