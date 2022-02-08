const totalPrice = (arr) => {
   return arr.reduce((acc, el) => acc + el.totalSaddlePrice, 0)
}

const updateSaddle = (item = {}, saddle) => {
   const {
      id = saddle.id,
      price = saddle.price,
      src = saddle.src,
      title = saddle.title,
      count = 0,
      totalSaddlePrice = 0 } = item;

   return {
      id, price, src, title,
      count: count + 1,
      totalSaddlePrice: totalSaddlePrice + price
   }
}

const updateItems = (items, saddle, isItem) => {

   if (isItem) {
      return items = items.map(el => {
         if (el.id === saddle.id) {
            return saddle
         }
         return el
      })
   }

   return [...items, saddle]
}

const initial = {
   items: [],
   total: 0
}

export const cartReducer = (state = initial, action) => {

   switch (action.type) {
      case 'SADDLE_ADDED_TO_CART':

         const { payload: saddle } = action
         const item = state.items.find(el => el.id === saddle.id)

         const newSaddle = updateSaddle(item, saddle)
         const newItems = updateItems(state.items, newSaddle, item)

         state = { ...state, items: newItems }
         state = { ...state, total: totalPrice(state.items) }

         return state

      case '':
         break;

      default: return state
   }
}