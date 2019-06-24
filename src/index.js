import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram, faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faSearch, faUserTie, faHome, faCloudUploadAlt, faComment, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faUserTie, faHome, faCloudUploadAlt, 
            faComment, faExclamationTriangle, faInstagram, 
            faFacebook, faGoogle);
dom.watch();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
