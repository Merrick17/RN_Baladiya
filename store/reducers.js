import {combineReducers} from 'redux';
import {userState} from './loggedIn/index';
import {clusterState} from './clusters/index';
import {BinState} from './bin/index';
import {UsersState} from './users/index';
import {TruckState} from './trucks/index';
import {RouteState} from './routes/index';
import {spinnerState} from './spinner/index';
export default rootReducer = combineReducers({
  userState,
  clusterState,
  BinState,
  UsersState,
  TruckState,
  RouteState,
  spinnerState,
});
