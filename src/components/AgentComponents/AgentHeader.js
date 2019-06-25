import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AgentHeader.scss'
import Logo from '../Logo'
import {Dropbox} from 'dropbox'


const dbx = new Dropbox({
    accessToken: '1h4MKn2TgCAAAAAAAAABRsCmhcmfra1WDcMxOOdbdtqGtQBQ4unwlHeRorOFmEPE',
    fetch
})
const fileListElem = document.querySelector('.js-file-list')

const state = {
  files: []
}

const init = () => {
  dbx.filesListFolder({
    path: ''
  }).then(res => console.log(res))
}

const updateFiles = files => {
  state.files = [...state.files, ...files]
  renderFiles()
}

const renderFiles = () => {
  
}

init()


export default function Header(){

    const faFas = [{fa:'home'}, {fa:'cloud-upload-alt'}, {fa:'comment'}, {fa:'exclamation-triangle'}];
    const faContent = faFas.map((c) => {
       return(
           <FontAwesomeIcon className="four-fa-fas" icon={c.fa}/>
           
       )
    });

    return (
        <nav className="nav-agent">
            <div className="nav-top">
                <Logo/>
                <div className="search-area">
                    <input type="text" placeholder=" search for clients, key words, general inquiry..." className="search-input"/>
                    <div className="search-buttons">
                        <button className="search-advanced">
                        ADVANCED
                        </button>
                        <button className="search-button">
                            <FontAwesomeIcon icon="search" pull="left"/>
                        </button>
                    </div>
                </div>
                <div className="profile-area">
                    <FontAwesomeIcon icon="user-tie"/>
                    <div className="user-name">A. Miller</div>
                </div>
            </div>
            <div className="nav-bot">
                <div className="current-route">
                    Current Route
                </div>
                <div className="four-fa-fas">
                    {faContent}
                </div>
            </div>
            
        </nav>
    )
}