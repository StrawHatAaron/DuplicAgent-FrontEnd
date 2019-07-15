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

//* this section holds many constants that will be re-used inside embedded routes */
const newBiz =  "/NewBusiness"
const newClient = newBiz + "/NewClient"


//the strings for design types in the main route file
//- think that this should possibly changed into components
const grid = "grid"
const simple = "simple"
const clientHome = "client"
const form = "form"
const dropbox = "dropbox"

//*** */the constants are written in the following structure***
// title: The title that will display where the user is,
// path: The path the will show exactly where the use it - needs to work with state in the futue,
// icon:cool little icon that wil show where the user is,
//explanation:a little thing to tell the user where they are - think I might turn this into help
//design: the string that is check when these routes are mapped. That way each one displays as it should 
export const Routes = [{    
    //header for all the routes in the App 
    // -- Using faFa Icons
    title:"Upload Document",
    path:"/UploadDocument",
    icon:"cloud-upload-alt",
    explanation:"Choose where to upload a Document!",
    design:simple
},{ title:"Chat",
    path:"/Chat",
    icon:"comment",
    explanation:"Send Message",
    design:simple
},{ title:"Notifications",
    path:"/Notifications",
    icon:"exclamation-triangle",
    explanation:"Dashboard Alerts",   
    design:simple
},{
    //home page for the Agent or Broker
    title:'New Business', 
    path:'/NewBusiness',
    icon:NewBusinessImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design: grid
},{title:'Renewals',
    path:'/Renewals', 
    icon:RenewalsImg, 
    explanation:'View all assigned renewals, update status/progress, access documents and information for renewals...',
    design: simple
},{ title:'Accounting',
    path:'/Accounting', 
    icon:AccountingImg, 
    explanation:'Run financial reports, view or create new invoices, statements, accounts receiveable/payable...',
    design:simple
},{ title:'Service',
    path:'/Service', 
    icon:ServiceImg, 
    explanation:'Issue standard Acord forms, help clients with general policy questions, admin tasks, urgent requests...',
    design:simple
},{ title:'Resources', 
    path:'/Resources',
    icon:ResourcesImg, 
    explanation:'Admin support tools, statistics and marketing materials, important agency files...',
    design:simple
},{ title:'Calendar',
    path:'/Calendar', 
    icon:CalendarImg, 
    explanation:'View or set new reminders, events, meetings, and keep track of important personal & business dates... ',
    design: simple
},{ title:'Surplus Lines Taxes',
    path:'/SurplusLinesTaxes', 
    icon:SurplusLinesTaxesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:simple
},{ title:'Agency Support',
    path:'/AgencySupport', 
    icon:AgencySupportImg, 
    explanation:'Customer support and contact information, live chat, questions and concerns, general help...',
    design:simple
},{
    //NEW Business ROUTES
    title:'New Client',
    path:`${newBiz}/NewClient`, 
    icon:NewClientImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:form
},{ title:'Existing Client',
    path:`${newBiz}/ExistingClient`, 
    icon:ExistingClientImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:dropbox
},{ title:'Current Submissions',
    path:`${newBiz}/CurrentSubmissions`, 
    icon:CurrentSubmissionsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:""
},{
    //For when choosing a client from dropbox - home page for a client maybe?
    //NewBusiness/ExistingClient/
    title:'Client Name!',
    path:`${newClient}/*`,
    icon:'',
    explanation:"Just chose a client now display the client page",
    design:""
},{
    //still need to incorporate the clients name in here
    title:'Acords',
    path:`${newClient}/*/Acords`, 
    icon:AcordsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:simple
},{ title:'Files',
    path:`${newClient}/*/Files`, 
    icon:FilesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:simple
},{ title:'Policies',
    path:`${newClient}/*/Policies`, 
    icon:PoliciesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:simple
},{ title:'Accounting',
    path:`${newClient}/*/Accounting`, 
    icon:ClientAccountingImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:simple
},{ title:'Claims',
    path:`${newClient}/*/Claims`, 
    icon:ClaimsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:simple
},{ title:'Quotes',
    path:`${newClient}/*/Quotes`, 
    icon:QuotesImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:simple
},{ title:'Additional Details',
    path:`${newClient}/*/AdditionalDetails`, 
    icon:AdditionalDetailsImg, 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...',
    design:simple
},]