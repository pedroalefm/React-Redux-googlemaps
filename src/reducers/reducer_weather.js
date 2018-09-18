import {FETCH_WEATHER} from '../actions'
export default (state = [], action) => {
    console.log("STADE" + state)

    switch (action.type){
        case FETCH_WEATHER :
            //concatena o novo array com o que tem
            return [action.payload.data, ...state]
            
        default:
            return state;
    }
    
}