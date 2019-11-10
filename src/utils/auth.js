import axios from 'axios';
import * as ApiConstants from "./ApiConstants";

const authToken = 'AuthToken'
export const AuthTokenKey = 'Token '.concat(window.localStorage.getItem(authToken))

class Auth {
    constructor() {
      this.authenticated = false
      this.passed = false
    }
  
    //not sure if this will be needed
    async isAuthenticated(callback) {
      await callback()
    }

    logout(callback){
        this.authenticated = false
        window.localStorage.setItem(authToken, "")
        callback()
    }

    authenticate(emailValue, passwordValue, callbackSuccess, callbackFailure){
        // console.log("email value "+emailValue)
        // console.log("password value "+passwordValue)
        axios.post(ApiConstants.GetAuthTokenURL, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            email: emailValue,
            password: passwordValue
        })
        .then((response) => {
            //console.log(response)
            // console.log(response.status)
            if(response.status===200){
                const token = response.data['token']
                window.localStorage.setItem(authToken, token)
                this.authenticated = true
                //Use the callback function after setting variables
                callbackSuccess()
                return true
            }
        }, (error) => {
            console.log(error);
            callbackFailure()
            return false
        })
    }

    async checkAuthentication(){
        const token = window.localStorage.getItem(authToken);
      
        // console.log("checking auth");
        // console.log(token);
      
        try {
          let response = await axios.get(ApiConstants.CheckUserInfoURL, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': 'true',
              'Authorization': 'Token ' + token
            },
          });
      
          if (response.status === 200) {
            return true;
          }
      
          return false;
        } catch (error) {
          //console.log(error);
          return false;
        }
      }

  }
  
  export default new Auth();
  