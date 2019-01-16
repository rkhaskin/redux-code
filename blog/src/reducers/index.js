import { combineReducers } from 'redux';
import { resourcesReducer } from 'iguazu-rest';

export default combineReducers({
  resources: resourcesReducer
});
