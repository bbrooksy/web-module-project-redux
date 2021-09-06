import { combineReducers } from 'redux';
import favoritesReducer from './movieReducer'
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    favorites: favoritesReducer
});

export default rootReducer;