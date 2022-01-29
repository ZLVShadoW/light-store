// const initial = {
//    saddles: [],
//    loading: false,
//    error: null
// }

export const saddlesReducer = (state, action) => {


   if (state === undefined) {
      return {
         saddles: [],
         loading: false,
         error: null
      }
   }
   switch (action.type) {
      case 'FETCH_SADDLES_REQUEST':
         return { ...state, loading: true }
      case 'FETCH_SADDLES_SUCCES':
         return { ...state, loading: false, saddles: action.payload }
      case 'FETCH_SADDLES_ERROR':
         return { ...state, loading: false, error: action.payload }

      default: return state
   }
}