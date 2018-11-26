import * as ActionTypes from './ActionTypes';
export const Leaders = (state = {
    isLoading: true,
    errorMessage: null,
    leaders: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return { ...state, isLoading: false, errorMessage: null, leaders: action.payload }

        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errorMessage: null, leaders: [] }

        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errorMessage: action.payload, leaders: [] }
            
        default:
            return state;
    }
}