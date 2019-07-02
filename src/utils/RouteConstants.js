import * as TopAgentComponents from '../components/AgentComponents/TopAgent'
//Images
import NewBusiness from '../img/routing/NewBusisnessImg.png'
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

//home page for the Agent or Broker
export const homeInfo = [{
    title:'New Business', 
    path:'/NewBusiness',
    icon:NewBusiness,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Renewals',
    path:'/Renewals', 
    icon:RenewalsImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'View all assigned renewals, update status/progress, access documents and information for renewals...'
},{
    title:'Accounting',
    path:'/Accounting', 
    icon:AccountingImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Run financial reports, view or create new invoices, statements, accounts receiveable/payable...'
},{
    title:'Service',
    path:'/Service', 
    icon:ServiceImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Issue standard Acord forms, help clients with general policy questions, admin tasks, urgent requests...'
},{
    title:'Resources', 
    path:'/Resources',
    icon:ResourcesImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Admin support tools, statistics and marketing materials, important agency files...'
},{
    title:'Calendar',
    path:'/Calendar', 
    icon:CalendarImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'View or set new reminders, events, meetings, and keep track of important personal & business dates... '
},{
    title:'Surplus Lines Taxes',
    path:'/SurplusLinesTaxes', 
    icon:SurplusLinesTaxesImg, 
    component:TopAgentComponents.simpleComponent("Welcome"),
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Agency Support',
    path:'/AgencySupport', 
    icon:AgencySupportImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Customer support and contact information, live chat, questions and concerns, general help...'
}]

//NEW Business ROUTES
export const newBizInfo = [{
    title:'New Client',
    path:`${homeInfo[0].path}/NewClient`, 
    icon:NewClientImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Existing Client',
    path:`${homeInfo[0].path}/ExistingClient`, 
    icon:ExistingClientImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Current Submissions',
    path:`${homeInfo[0].path}/CurrentSubmissions`, 
    icon:CurrentSubmissionsImg, 
    component:TopAgentComponents.simpleComponent("Welcome"),
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
}]


//still need to incorporate the clients name in here
export const existingClientInfo =[{
    title:'Acords',
    path:`${newBizInfo[1].path}/Acords`, 
    icon:AcordsImg, 
    component:TopAgentComponents.simpleComponent("Welcome"),
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Files',
    path:`${newBizInfo[1].path}/Files`, 
    icon:FilesImg, 
    component:TopAgentComponents.simpleComponent("Welcome"),
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Policies',
    path:`${newBizInfo[1].path}/Policies`, 
    icon:PoliciesImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Accounting',
    path:`${newBizInfo[1].path}/Accounting`, 
    icon:ClientAccountingImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Claims',
    path:`${newBizInfo[1].path}/Claims`, 
    icon:ClaimsImg, 
    component:TopAgentComponents.simpleComponent("Welcome"),
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Quotes',
    path:`${newBizInfo[1].path}/Quotes`, 
    icon:QuotesImg,
    component:TopAgentComponents.simpleComponent("Welcome"), 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Additional Details',
    path:`${newBizInfo[1].path}/AdditionalDetails`, 
    icon:AdditionalDetailsImg, 
    component:TopAgentComponents.simpleComponent("Welcome"),
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},]