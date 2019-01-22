import { combineReducers } from 'redux';
import  resourcesReducer  from '../iguazu-rest/reducer';

export default combineReducers({
  resources: resourcesReducer
});
