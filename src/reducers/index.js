import { combineReducers } from 'redux';
import todos from './todos.reducer';
import visibilityFilter from './visibility-filter.reducer';

const reducer = combineReducers({
  todos,
  visibilityFilter
});

export default reducer;