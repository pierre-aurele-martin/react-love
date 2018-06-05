import { combineReducers } from 'redux';
import {
  EASTER_VALIDATION,
  INCREMENT_ALERT,
  RESET_ALERT
} from '../actions/easters';

const initialStateEasters = {
  bep: false,
  zola: false,
  link: false,
  home: false,
  love: false
};

const easters = (state = initialStateEasters, action) => {
  switch (action.type) {
    case EASTER_VALIDATION:
      return Object.assign({}, state, { [action.easter]: true });
    default:
      return state;
  }
};

const eastersAlert = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_ALERT:      
      /* const newState = ; */
      return Object.assign({}, { count: state.count + 1 });
    case RESET_ALERT:
      return Object.assign({}, { count: 0 });
    default:
      return state;
  }
};

// We combine the reducers here so that they can be left split apart above
const reducers = combineReducers({
  easters,
  eastersAlert
});

export default reducers;
