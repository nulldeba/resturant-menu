import {createStore, combineReducers} from 'redux';
import {Comments} from './Comments';
import {Dishes} from './Dishes'; 
import {Leaders} from './Leader';
import {Promotions} from './Promotions';

export const ConfigureStore = () => {
    const store = createStore( combineReducers({
        dishes: Dishes,
        comments:Comments,
        leaders:Leaders,
        promotions:Promotions
    }));

    return store;
}