import React from 'react'
import {acordInfo, acordTempInfo} from '../../utils/RouteConstants'
import {Link} from 'react-router-dom'

function FileChooser(props) {



    var AcordInfo;
    if (props.acordType==='empty'){
        AcordInfo = acordInfo.map((c) => {
            const url = window.location.hash.replace('#', '') 
            const name = c.name.replace(' ', '')
            const finalUrl = url + name
            return (
                <>   
                    <Link to={finalUrl}>
                        {c.name}
                    </Link>
                    <br/>
                </>
            )
        })    
    } else if (props.acordType==='filled'){
        AcordInfo = acordTempInfo.map((c) => {
            const url = window.location.hash.replace('#', '')
            const name = c.name.replace(' ', '')
            const finalUrl = url + name + 'Filled'
            return (
                <>   
                    <Link to={finalUrl}>
                    {window.localStorage.getItem('clientName')+"'s "+c.name+"Filled"}
                    </Link>
                    <br/>
                </>
            )
        })    
    }
    

    return (
        <div style={{fontSize:'2rem'}}>
            {AcordInfo}
        </div>
    )
}

export default FileChooser
