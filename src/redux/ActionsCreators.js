import * as ActionTYpes from './ActionTypes';

export const AddComment = (dishId, rating, author, comment) => ({
    type: ActionTYpes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author       
    }
});