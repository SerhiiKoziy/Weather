import * as types from '../constants/ActionTypes';
import * as API from '../constants/Api';
import {push} from 'react-router-redux';



export function pushRedirect(path) {
    return dispatch => {
        dispatch(push(path))
    }
}




export function search(data){
    let {nameArtist, currentCategory, currentEntity, limitList} = data;

    return dispatch =>{

        dispatch(requestApiResult());
        if(nameArtist.length > 0){
            $.ajax({
                url:API.MAIN_API_URL,
                data:{term:nameArtist, entity:currentEntity, media:currentCategory, limit:limitList},
                type:"GET",
                dataType: "jsonp",
                success: function(data, dataType){
                    let results = data.results
                    //console.log(data);

                    if(data.results.length > 0){
                        dispatch(receiveApiResult(results))
                    }else if(data.results.length == 0){
                        dispatch(requestApiResultWasLoad());
                    }

                }
            })
        }else{
            dispatch(requestApiResultNeedName());
            console.log(error, 'needName')
        }
    }
}

export function requestApiResult() {
    return {
        type: types.REQUEST_API_RESULT
    };
}
export function requestApiResultNeedName() {
    return {
        type: types.REQUEST_API_RESULT_NEED_NAME
    };
}
export function requestApiResultWasLoad() {
    return {
        type: types.REQUEST_API_RESULT_WAS_LOAD
    };
}
export function receiveApiResult(payload) {

    return {
        type: types.RECEIVE_API_RESULT,
        payload
    };
}