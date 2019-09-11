import axios from 'axios'

const AuthTokenKey = "AuthToken"

class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    //not sure if this will be needed
    isAuthenticated() {
      return this.authenticated;
    }

    authenticate(emailValue, passwordValue, callback){
        // console.log("email value "+emailValue)
        // console.log("password value "+passwordValue)
        axios.post('http://127.0.0.1:8000/api/user/me/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            email: emailValue,
            password: passwordValue
        })
        .then((response) => {
            console.log(response)
            // console.log(response.status)
            if(response.status===200){
                const token = response.data['token']
                window.localStorage.setItem(token, AuthTokenKey)
                console.log(token)
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
        axios.post('http://127.0.0.1:8000/api/user/token/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then((response) => {
            console.log('----------------------------')
            console.log('checkAuthentication')
            console.log(response)
            console.log('----------------------------')
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
  