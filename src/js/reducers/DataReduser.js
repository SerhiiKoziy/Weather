import * as types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/InitialState';

export default function DataReduser(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {



    case types.RECEIVE_API_RESULT:
      return {
        ...state,
        result:payload,
        isLoaded: true,
      };

    case types.REQUEST_API_RESULT:
      return {
        ...state,
        isLoaded: false,
      };
    case types.REQUEST_API_RESULT_NEED_NAME:
      return {
        ...state,
        isLoaded: 'needName',
      };
    case types.REQUEST_API_RESULT_WAS_LOAD:
      return {
        ...state,
        isLoaded: 'wasLoad',
      };


    default:
      return state;
  }
}
