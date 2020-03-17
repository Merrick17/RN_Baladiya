import {combineReducers} from 'redux';
import {userState} from './loggedIn/index';
import {clusterState} from './clusters/index';
import {BinState} from './bin/index';
import {UsersState} from './users/index';
import {TruckState} from './trucks/index'; 
export default rootReducer = combineReducers({
  userState,
  clusterState,
  BinState,
  UsersState,
  TruckState
});
