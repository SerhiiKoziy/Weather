import * as types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/InitialState';

export default function DataReduser(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {



    case types.USER_COORDINATES:
      return {
        ...state,
        coordinates:payload,
        isFound: true,
      };

    case types.USER_WEATHER_FROM_COORDINATES:
      return {
        ...state,
        weather:payload,
        isFound: true,
      };

    case types.REQUEST_API_RESULT:
      return {
        ...state,
        isFound: false,
      };



    case types.RECEIVE_FORECAST:
      return {
        ...state,
        weatherForecast:payload,
        forecast: true,
      };

    case types.REQUEST_FORECAST:
      return {
        ...state,
        forecast: false,
      };

    default:
      return state;
  }
}
