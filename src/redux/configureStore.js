import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Comments} from './Comments';
import {Dishes} from './Dishes'; 
import {Leaders} from './Leader';
import {Promotions} from './Promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore( combineReducers({
        dishes: Dishes,
        comments:Comments,
        leaders:Leaders,
        promotions:Promotions
    }),applyMiddleware(thunk,logger));

    return store;
}