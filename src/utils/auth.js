import axios from 'axios'

const AuthTokenKey = "AuthToken"

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
        window.localStorage.setItem(AuthTokenKey, "")
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
            console.log(response)
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

    async checkAuthentication(callback){
        const token = window.localStorage.getItem(AuthTokenKey)

        console.log("checking auth")
        console.log(token)

        await axios.get('http://127.0.0.1:8000/api/user/me/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': 'Token ' + token
            },
        })
        .then((response) => {
            if(response.status===200){
                console.log('auth check passed')
                // this.passed = true
                var good = true
                callback(good)

            } 
        }, (error) => {
            var good = false
            callback(good)
            // this.passed = false 
            console.log(error);
        })
        // return this;
    }

  }
  
  export default new Auth();
  