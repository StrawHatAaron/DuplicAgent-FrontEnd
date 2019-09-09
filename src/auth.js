import axios from 'axios'

class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }

    authenticate(emailValue, passwordValue){
        // console.log(emailValue)
        // console.log(passwordValue)
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
            console.log(response.status)
            if(response.status===200){
                window.localStorage.setItem(true, "SignedIn")
                this.login()
                console.log("proper username and password info was submitted")
            }
        }, (error) => {
            console.log(error);
        })
    }
  }
  
  export default new Auth();
  