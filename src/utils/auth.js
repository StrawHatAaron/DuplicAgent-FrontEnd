import axios from 'axios'

const AuthTokenKey = "AuthToken"

class Auth {
    constructor() {
      this.authenticated = false
    }
  
    //not sure if this will be needed
    isAuthenticated() {
      return this.authenticated
    }

    logout(callback){
        this.authenticated = false
        callback()
    }

    authenticate(emailValue, passwordValue, callback){
        // console.log("email value "+emailValue)
        // console.log("password value "+passwordValue)
        axios.post('http://127.0.0.1:8000/api/user/token/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            email: emailValue,
            password: passwordValue
        })
        .then((response) => {
            // console.log(response)
            // console.log(response.status)
            if(response.status===200){
                const token = response.data['token']
                window.localStorage.setItem(AuthTokenKey, token)
                this.authenticated = true
                //Use the callback function after setting variables
                callback()
                return true
            }
        }, (error) => {
            console.log(error);
            return false
        })
    }

    checkAuthentication(){
        const token = window.localStorage.getItem(AuthTokenKey)

        console.log(token)

        axios.get('http://127.0.0.1:8000/api/user/me/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': 'Token ' + token
            },
        })
        .then((response) => {
            if(response.status===200){
                return true
            } else {
                return false
            }
        }, (error) => {
            console.log(error);
            return false
        })
    }

  }
  
  export default new Auth();
  