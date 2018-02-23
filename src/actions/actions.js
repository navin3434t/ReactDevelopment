
import axios from 'axios';
import store from '../store/store'


export const IS_LOGGED_IN = 'IS_LOGGED_IN'

function isLoggedIn(json) {
  return {
    type: IS_LOGGED_IN,
    user:json
  }
}

export const NEED_TO_LOGOUT = 'NEED_TO_LOGOUT'
function needToLogout(user_account_status,json) {
  console.log(json);
  return {
    type: NEED_TO_LOGOUT,
    user_account_status
  }
}

export const NEED_TO_LOGIN = 'NEED_TO_LOGIN'
export function needToLogin({username,password}) {
  return {
    type: NEED_TO_LOGIN,
    username,
    password
  }
}

export  function login(username,password) {
  return dispatch => {
    console.log(username);
    console.log(password);
    var formData = new FormData();
      formData.append('username',username);
      formData.append('password',password);

 return axios({
        method:'post',
        headers: {'Content-type':undefined},
        responseType:'json',
        url:'http://Localhost/webstore/dogfinderBack/User/userLogin',
        data:formData
    }).then(function(response) {
  
       if(response.data.status=='1'){
             dispatch(isLoggedIn(response.data.data))
             return 1
       } 
       else{
              return 0
       }            
    });
  }
}


export const GET_HOMEDATA= 'GET_HOMEDATA'

export function getHomeData(user_id,token){
    return dispatch => {


    var formData = new FormData();
      formData.append('user_id',user_id);
      formData.append('webservice_token',token);

 return axios({
        method:'post',
        headers: {'Content-type':undefined},
        responseType:'json',
        url:'http://Localhost/webstore/dogfinderBack/User/requestsData',
        data:formData
    }).then(function(response) {
         console.log(response);
       if(response.data.status=='1'){
            dispatch(updateHomeData(response.data.data));
            dispatch(serverLink(response.data.serverlink));
             return 1
       } 
       else{
              return 0
       }            
    });
  }
}
export const UPDATE_HOMEDATA = 'UPDATE_HOMEDATA'
export function updateHomeData(json) {
  return {
    type: UPDATE_HOMEDATA,
    homeData:json
  }
}
export const SERVER_LINK = 'SERVER_LINK'
export function serverLink(link) {
  return {
    type: SERVER_LINK,
    serverLink:link
  }
}


export const GET_TRAINERDATA= 'GET_TRAINERDATA'

export function getTrainerData(user_id,token){
    return dispatch => {


    var formData = new FormData();
      formData.append('user_id',user_id);
      formData.append('webservice_token',token);

 return axios({
        method:'post',
        headers: {'Content-type':undefined},
        responseType:'json',
        url:'http://Localhost/webstore/dogfinderBack/User/trainer',
        data:formData
    }).then(function(response) {
         console.log(response);
       if(response.data.status=='1'){
            dispatch(updateTrainerData(response.data.data));
          
             return 1
       } 
       else{
              return 0
       }            
    });
  }
}

export const UPDATE_TRAINERDATA = 'UPDATE_TRAINERDATA'
export function updateTrainerData(json) {
  return {
    type: UPDATE_HOMEDATA,
    trainerData:json
  }
}