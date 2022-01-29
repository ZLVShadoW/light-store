const totalPrice = (arr) => {
   return arr.reduce((acc, el) => acc + el.price, 0)
}

const initial = {
   items: [],
   total: 0
}

export const cartReducer = (state = initial, action) => {

   switch (action.type) {
      case 'ADDED_TO_CART':
         state = { ...state, items: [...state.items, action.payload] }
         state = { ...state, total: totalPrice(state.items) }

         return state

      default: return state
   }
}