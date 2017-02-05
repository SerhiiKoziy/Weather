import * as types from '../constants/ActionTypes';
import * as API from '../constants/Api';
import {push} from 'react-router-redux';
import axios from 'axios';

export function pushRedirect(path) {
    return dispatch => {
        dispatch(push(path))
    }
}

export function getWatherToCoor(data) {
  return (dispatch, getState) => {
    axios.get(API.MAIN_API_URL, {
      params:{
        APPID: '8932288cdb827d871a2f1495aae80b44',
        lat:30.41904,
        lon:50.431292,
      }
    })
      .then(function (response) {
        console.log('getWatherToCoordinates', response );
        dispatch(receiveUserWeather(response));
        if(response.error) throw new Error(response.error);

      })
      .catch(function (error) {
        dispatch(requestWeatherNotFaund());
        console.log(error);
      });

  }
}


export function getWatherToCoordinates(data){
    let {userKeyAPI:{APPID}, coordinates:{lon,lat}} = data;
    return dispatch =>{
            $.ajax({
                url:API.MAIN_API_URL,
                data:{APPID, lon, lat},
                type:"GET",
                dataType: "jsonp",
                success: function(data, dataType){
                    console.log('data', data);
                    if(data){
                        dispatch(receiveUserWeather(data))
                    }else {
                        dispatch(requestWeatherNotFaund());
                    }
                }
            })
    }
}



export function requestWeatherNotFaund() {
    return {
        type: types.REQUEST_API_RESULT
    };
}
export function receiveUserWeather(payload) {
    return {
        type: types.USER_WEATHER_FROM_COORDINATES,
        payload
    };
}
export function receiveCoor(payload) {
    return {
        type: types.USER_COORDINATES,
        payload
    };
}

export function getWatherForecast(data){
  let {cityIdForForecast:{id}} = data;
  return dispatch =>{
    // dispatch(requestApiResult());

    $.ajax({
      url:API.FORECAST_API_URL,
      data:{'London', 'us'},
      type:"GET",
      dataType: "jsonp",
      success: function(data, dataType){
        console.log('London', data);
        if(data){
          dispatch(receiveUserForecast(data))
        }else {
          dispatch(requestForecast());
        }
      }
    })
  }
}


export function receiveUserForecast(payload) {
  return {
    type: types.RECEIVE_FORECAST,
    payload
  };
}
export function requestForecast() {
  return {
    type: types.REQUEST_FORECAST
  };
}
