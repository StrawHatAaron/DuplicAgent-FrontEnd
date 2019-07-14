import NewBusinessImg from '../img/routing/NewBusisnessImg.png'
import RenewalsImg from '../img/routing/RenewalsImg.png'
import AccountingImg from '../img/routing/AccountingImg.png'
import ServiceImg from '../img/routing/ServiceImg.png'
import ResourcesImg from '../img/routing/ResourcesImg.png'
import CalendarImg from '../img/routing/CalendarImg.jpg'
import SurplusLinesTaxesImg from '../img/routing/SurplusLinesTaxes.png'
import AgencySupportImg from '../img/routing/AgencySupportImg.png'
import NewClientImg from '../img/routing/NewClientImg.png'
import ExistingClientImg from '../img/routing/ExistingClientImg.png'
import CurrentSubmissionsImg from '../img/routing/CurrentSubmissions.png'
import AcordsImg from '../img/routing/AcordsImg.png'
import FilesImg from '../img/routing/FilesImg.png'
import PoliciesImg from '../img/routing/PoliciesImg.png'
import ClientAccountingImg from '../img/routing/AccountingImg.png'
import ClaimsImg from '../img/routing/ClaimsImg.png'
import QuotesImg from '../img/routing/QuotesImg.jpeg'
import AdditionalDetailsImg from '../img/routing/AdditionalDetailsImg.png'





//header for all the routes in the App 
// -- Using faFa Icons
export const agentHeaderInfo = [{    
    title:"Upload Document",
    path:"/UploadDocument",
    icon:"cloud-upload-alt",
    explanation:"Choose where to upload a Document!"
},{
    title:"Chat",
    path:"/Chat",
    icon:"comment",
    explanation:"Send Message",
},{
    title:"Notifications",
    path:"/Notifications",
    icon:"exclamation-triangle",
    explanation:"Dashboard Alerts",   
}]

//home page for the Agent or Broker
export const homeInfo = [{
    title:'New Business', 
    path:'/NewBusiness',
    icon:NewBusinessImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Renewals',
    path:'/Renewals', 
    icon:RenewalsImg, 
    explanation:'View all assigned renewals, update status/progress, access documents and information for renewals...'
},{
    title:'Accounting',
    path:'/Accounting', 
    icon:AccountingImg, 
    explanation:'Run financial reports, view or create new invoices, statements, accounts receiveable/payable...'
},{
    title:'Service',
    path:'/Service', 
    icon:ServiceImg, 
    explanation:'Issue standard Acord forms, help clients with general policy questions, admin tasks, urgent requests...'
},{
    title:'Resources', 
    path:'/Resources',
    icon:ResourcesImg, 
    explanation:'Admin support tools, statistics and marketing materials, important agency files...'
},{
    title:'Calendar',
    path:'/Calendar', 
    icon:CalendarImg, 
    explanation:'View or set new reminders, events, meetings, and keep track of important personal & business dates... '
},{
    title:'Surplus Lines Taxes',
    path:'/SurplusLinesTaxes', 
    icon:SurplusLinesTaxesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Agency Support',
    path:'/AgencySupport', 
    icon:AgencySupportImg, 
    explanation:'Customer support and contact information, live chat, questions and concerns, general help...'
}]

//NEW Business ROUTES
export const newBizInfo = [{
    title:'New Client',
    path:`${homeInfo[0].path}/NewClient`, 
    icon:NewClientImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Existing Client',
    path:`${homeInfo[0].path}/ExistingClient`, 
    icon:ExistingClientImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Current Submissions',
    path:`${homeInfo[0].path}/CurrentSubmissions`, 
    icon:CurrentSubmissionsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
}]

//For when choosing a client from dropbox
//NewBusiness/ExistingClient/
export const choseClientInfo = [{
    title:'Client Name!',
    path:`${newBizInfo[1].path}/*`,
    icon:'',
    explanation:"Just chose a client now display the client page"
}]

//still need to incorporate the clients name in here
export const existingClientInfo =[{
    title:'Acords',
    path:`${newBizInfo[1].path}/*/Acords`, 
    icon:AcordsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Files',
    path:`${newBizInfo[1].path}/*/Files`, 
    icon:FilesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Policies',
    path:`${newBizInfo[1].path}/*/Policies`, 
    icon:PoliciesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Accounting',
    path:`${newBizInfo[1].path}/*/Accounting`, 
    icon:ClientAccountingImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Claims',
    path:`${newBizInfo[1].path}/*/Claims`, 
    icon:ClaimsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Quotes',
    path:`${newBizInfo[1].path}/*/Quotes`, 
    icon:QuotesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Additional Details',
    path:`${newBizInfo[1].path}/*/AdditionalDetails`, 
    icon:AdditionalDetailsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},]