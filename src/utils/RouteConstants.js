import React from 'react'

//imported icons
import NewBusinessImg from '../media/routing/NewBusisnessImg.png'
import RenewalsImg from '../media/routing/RenewalsImg.png'
import AccountingImg from '../media/routing/AccountingImg.png'
import ServiceImg from '../media/routing/ServiceImg.png'
import ResourcesImg from '../media/routing/ResourcesImg.png'
import CalendarImg from '../media/routing/CalendarImg.jpg'
import SurplusLinesTaxesImg from '../media/routing/SurplusLinesTaxes.png'
import AgencySupportImg from '../media/routing/AgencySupportImg.png'
import NewClientImg from '../media/routing/NewClientImg.png'
import ExistingClientImg from '../media/routing/ExistingClientImg.png'
import CurrentSubmissionsImg from '../media/routing/CurrentSubmissions.png'
import AcordsImg from '../media/routing/AcordsImg.png'
import FilesImg from '../media/routing/FilesImg.png'
import PoliciesImg from '../media/routing/PoliciesImg.png'
import ClientAccountingImg from '../media/routing/AccountingImg.png'
import ClaimsImg from '../media/routing/ClaimsImg.png'
import QuotesImg from '../media/routing/QuotesImg.jpeg'
import AdditionalDetailsImg from '../media/routing/AdditionalDetailsImg.png'

//imported components
import NewClient from '../components/AgentComponents/NewClient'
import NewPolicy from '../components/AgentComponents/NewPolicy'
import Todos from '../components/AgentComponents/Todos'
import * as TopAgent from '../components/AgentComponents/TopAgent'
import TopClient from '../components/AgentComponents/TopClient'
import Uploader from '../components/AgentComponents/Uploader'
import Notifications from '../components/AgentComponents/Notifications'
import RetrieveData from '../components/AgentComponents/RetrieveData'
import DisplayPolicy from '../components/AgentComponents/DisplayPolicy'
import FileChooser from '../components/AgentComponents/FileChooser'

//pdfs - temporary 
import {acord25, acord125, acord126, acord131, acord131Filled} from './AdobeFile'


//When Adding to the routing array always try and append to the end of it

//These titles are passed down into components that are used for routing.
//Then checked and used to dynamically display the appropriate data.
export const ExistingClients = 'Existing Clients'
export const Polices = 'Polices'
export const AccountingInfo = 'Accounting Info'

//constant paths that help keep the app more organized because
//there is lots of reused paths

//Agent Authed Routes
export const baseURL = "/Agent"
const home = "/Home"
const newBusiness = "/NewBusiness"
const clientIdPath = baseURL+home+"/NewBusiness/ExistingClient/:client"
const policyIdPath = clientIdPath+"/Policies/:policy"
const acordPath = clientIdPath+"/Acords"
const filesPath = clientIdPath+"/Files"

//Landing page
export const signInPath = "/"
export const signUpPath = "/SignUp"



//*** */the constants are written in the following structure***
// title: The title that will display where the user is,
// path: The path the will show exactly where the use it - needs to work with state in the futue,
// icon:cool little icon that wil show where the user is,
//explanation:a little thing to tell the user where they are - think I might turn this into help

// -- Using faFa Icons
export const agentHeaderInfo = [{    
    title:"Upload Document",
    path:baseURL+"/UploadDocument",
    icon:"cloud-upload-alt",
    explanation:"Choose where to upload a Document!",
    botComponent:Uploader
},{
    title:"Chat",
    path:baseURL+"/Chat",
    icon:"comment",
    explanation:"Send Message",
    botComponent:Uploader
},{
    title:"Notifications",
    path:baseURL+"/Notifications",
    icon:"exclamation-triangle",
    explanation:"Dashboard Alerts",   
    botComponent:Notifications
}]

//home page for the Agent or Broker
export const homeInfo = [{
    title:'New Business', 
    path:baseURL+home+'/NewBusiness',
    icon:NewBusinessImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Renewals',
    path:baseURL+home+'/Renewals', 
    icon:RenewalsImg, 
    explanation:'View all assigned renewals, update status/progress, access documents and information for renewals...'
},{
    title:'Accounting',
    path:baseURL+home+'/Accounting', 
    icon:AccountingImg, 
    explanation:'Run financial reports, view or create new invoices, statements, accounts receiveable/payable...'
},{
    title:'Service',
    path:baseURL+home+'/Service', 
    icon:ServiceImg, 
    explanation:'Issue standard Acord forms, help clients with general policy questions, admin tasks, urgent requests...'
},{
    title:'Resources', 
    path:baseURL+home+'/Resources',
    icon:ResourcesImg, 
    explanation:'Admin support tools, statistics and marketing materials, important agency files...'
},{
    title:'Calendar',
    path:baseURL+home+'/Calendar', 
    icon:CalendarImg, 
    explanation:'View or set new reminders, events, meetings, and keep track of important personal & business dates... '
},{
    title:'Surplus Lines Taxes',
    path:baseURL+home+'/SurplusLinesTaxes', 
    icon:SurplusLinesTaxesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Agency Support',
    path:baseURL+home+'/AgencySupport', 
    icon:AgencySupportImg, 
    explanation:'Customer support and contact information, live chat, questions and concerns, general help...'
}]

//NEW Business ROUTES
export const newBizInfo = [{
    title:'New Client',
    path:`${homeInfo[0].path}/NewClient`, 
    icon:NewClientImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent: NewClient
},{
    title:ExistingClients,
    path:`${homeInfo[0].path}/ExistingClient`, 
    icon:ExistingClientImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent:() => (<RetrieveData type={ExistingClients}/>)
},{
    title:'Current Submissions',
    path:`${homeInfo[0].path}/CurrentSubmissions`, 
    icon:CurrentSubmissionsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent: () => (<RetrieveData type={ExistingClients}/>)
}]



//still need to incorporate the clients name in here
export const existingClientInfo = [{
    title:'Acords',
    path:acordPath, 
    icon:AcordsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent: () => (<FileChooser acordType={"empty"}/>)
},{
    title:'Files',
    path:filesPath, 
    icon:FilesImg, 
    explanation:'View, Download and Edit all the files that you have uploaded for this Client. ',
    botComponent:() => (<FileChooser acordType={"filled"}/>)
},{
    title:'Create Policy',
    path:`${clientIdPath}/Create Policy`, 
    icon:ClientAccountingImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent:NewPolicy
},{
    title:Polices,
    path:`${clientIdPath}/Policies`, 
    icon:PoliciesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent:() => (<RetrieveData type={Polices}/>)
},{
    title:'Claims',
    path:`${clientIdPath}/Claims`, 
    icon:ClaimsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent:Todos
},{
    title:'Quotes',
    path:`${clientIdPath}/Quotes`, 
    icon:QuotesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent:Todos
},{
    title:'Additional Details',
    path:`${clientIdPath}/AdditionalDetails`, 
    icon:AdditionalDetailsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    botComponent:Todos
},]


export const acordInfo = [{
        path:acordPath+'/acord25',
        name:'Acord 25',
        pdf:acord25
    },{
        path:acordPath+'/acord125',
        name:'Acord 125',
        pdf:acord125
    },{
        path:acordPath+'/acord126',
        name:'Acord 126',
        pdf:acord126
    },{
        path:acordPath+'/acord131',
        name:'Acord 131',
        pdf:acord131
},]

export const acordTempInfo =[{
    path:filesPath+'/acord131Filled',
    name:'Acord 131',
    pdf:acord131Filled
},{
    path:filesPath+'/acord125Filled',
    name:'Acord 125',
    pdf:acord125
}]

//after you click on a policy number have this display
export var policyInfo = [{
    title:"The Specific Policy",
    path:policyIdPath,
    botComponent:DisplayPolicy
}]


//Routes that are for displaying navigation with grid components
export var gridRouteInfo = [{
    title:'Home',
    path:baseURL+home, 
    icon:'home', 
    topComponent: TopAgent.simple('Home'),
    storeData:'',
    info: homeInfo
},{
    title:'New Business',
    path:baseURL+home+newBusiness, 
    icon:AdditionalDetailsImg, 
    topComponent: TopAgent.simple('New Business'),
    storeData:'',
    info: newBizInfo
},{
    title:'Client Id!',
    path:clientIdPath,
    icon:'',
    topComponent: <TopClient/>,
    storeData:'Client Name',
    info:existingClientInfo
}]


