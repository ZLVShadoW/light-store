import { ApiService } from '../../api'

const apiService = new ApiService;

const saddlesRequested = () => {
   return {
      type: 'FETCH_SADDLES_REQUEST'
   }
}
const saddlesLoaded = (saddles) => {
   return {
      type: 'FETCH_SADDLES_SUCCES',
      payload: saddles
   }
}
const saddlesError = (error) => {
   return {
      type: 'FETCH_SADDLES_ERROR',
      payload: error
   }
}

export const fetchSaddles = () => (dispatch) => {
   dispatch(saddlesRequested())
   apiService.getSaddles()
      .then(res => dispatch(saddlesLoaded(res)))
      .catch(error => dispatch(saddlesError(error)))
}