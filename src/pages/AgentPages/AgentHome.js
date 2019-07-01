import React, {useState, useEffect} from 'react'
import {Dropbox} from 'dropbox'
import AgentHeader from '../../components/AgentComponents/AgentHeader'
import './AgentHome.scss'
import GridChooser from '../../components/AgentComponents/GridChooser';
import {Switch, Route} from 'react-router-dom'


const newBizInfo = [{
    title:'New Client', 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Existing Client', 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Current Submissions', 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
}]


var homeInfo = [{
    title:'New Business', 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Renewals', 
    icon:'', 
    explanation:'View all assigned renewals, update status/progress, access documents and information for renewals...'
},{
    title:'Accounting', 
    icon:'', 
    explanation:'Run financial reports, view or create new invoices, statements, accounts receiveable/payable...'
},{
    title:'Service', 
    icon:'', 
    explanation:'Issue standard Acord forms, help clients with general policy questions, admin tasks, urgent requests...'
},{
    title:'Resources', 
    icon:'', 
    explanation:'Admin support tools, statistics and marketing materials, important agency files...'
},{
    title:'Calendar', 
    icon:'', 
    explanation:'View or set new reminders, events, meetings, and keep track of important personal & business dates... '
},{
    title:'Surplus Lines Taxes', 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Agency Support', 
    icon:'', 
    explanation:'Customer support and contact information, live chat, questions and concerns, general help...'
}]

const routes =[
    {
      path: "/Home",
      props: homeInfo
    },
    // {
    //   path: "/tacos",
    //   component: Tacos,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
    // }
  ];

export default function AgentHome(){

    const dbx = new Dropbox({
        accessToken: '1h4MKn2TgCAAAAAAAAABRsCmhcmfra1WDcMxOOdbdtqGtQBQ4unwlHeRorOFmEPE',
        fetch
    })

    var [files, setFiles] = useState([{},])
    useEffect(() => {
        async function fetchDpx() {  
            const response = await dbx.filesListFolder({  
                path: '',   
                limit: 8     
            })
            //note need to wait for DOM to refresh so 
            //logging it here will not show a change
            setFiles(response.entries)
        }    
        fetchDpx()
    }, [])


    const displayCustomers = files.map((file) => {
        let thumbnail
        var tagType = file['.tag']
        console.log(tagType)
        if (tagType == 'folder'){
            console.log("what is going on")
            thumbnail = file.thumbnail
            ? `data:image/jpeg;base64, ${file.thumbnail}`
            : `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWZpbGUiPjxwYXRoIGQ9Ik0xMyAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOXoiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxMyAyIDEzIDkgMjAgOSI+PC9wb2x5bGluZT48L3N2Zz4=`
        } else {
            console.log("what is going on2")
            thumbnail = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWZvbGRlciI+PHBhdGggZD0iTTIyIDE5YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmg1bDIgM2g5YTIgMiAwIDAgMSAyIDJ6Ij48L3BhdGg+PC9zdmc+`
        }
        return (
            <li key={file.id}>
                <img 
                    class="dbx-thumb" 
                    src={thumbnail}
                    alt="folder-thumbnail"/>
                {file.name}
            </li>
        )
    })


    

    return(
        <div>
            <AgentHeader/>
            <body>
                <div className="home-div">
                    <div className="welcome">
                        Welcome, Jack!
                    </div>
                    <hr/>
                    <Switch>
                        
                        {/* {routes.map((c) => {
                            <Route exact path='/' render={(props) => (
                                <GridChooser {...props} info={c.homeInfo} />
                            )}/>
                        })} */}


                        <Route exact path='/' render={(props) => (
                            <GridChooser {...props} info={homeInfo} />
                        )}/>

                        <Route exact path='/' render={(props) => (
                            <GridChooser {...props} info={homeInfo} />
                        )}/>

                    </Switch>
                </div>

                <ul>
                    {displayCustomers}

                </ul>
            </body>
            
        </div>
    )
}