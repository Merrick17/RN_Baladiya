import {combineReducers} from 'redux';
import {userState} from './loggedIn/index';
import {clusterState} from './clusters/index';

export default rootReducer = combineReducers({userState, clusterState});
