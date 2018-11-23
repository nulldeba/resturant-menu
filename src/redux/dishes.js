import * as ActionTYpes from './ActionTypes';
export const Dishes = (state = {
    isLoading: true,
    errorMessage: null,
    dishes: []
}, action) => {

    switch (action.type) {
        case ActionTYpes.ADD_DISHES:
            return { ...state, isLoading: false, errorMessage: null, dishes: action.payload }
        case ActionTYpes.DISHES_LOADING:
            return { ...state, isLoading: true, errorMessage: null, dishes: [] }
        case ActionTYpes.DISHES_FAILED:
            return { ...state, isLoading: false, errorMessage: action.payload, dishes: [] }
        default:
            return state;
    }
}