


//home page for the Agent or Broker
export const homeInfo = [{
    title:'New Business', 
    path:'/NewBusiness',
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Renewals',
    path:'/Renewals', 
    icon:'', 
    explanation:'View all assigned renewals, update status/progress, access documents and information for renewals...'
},{
    title:'Accounting',
    path:'/Accounting', 
    icon:'', 
    explanation:'Run financial reports, view or create new invoices, statements, accounts receiveable/payable...'
},{
    title:'Service',
    path:'/Service', 
    icon:'', 
    explanation:'Issue standard Acord forms, help clients with general policy questions, admin tasks, urgent requests...'
},{
    title:'Resources', 
    path:'/Resources',
    icon:'', 
    explanation:'Admin support tools, statistics and marketing materials, important agency files...'
},{
    title:'Calendar',
    path:'/Calendar', 
    icon:'', 
    explanation:'View or set new reminders, events, meetings, and keep track of important personal & business dates... '
},{
    title:'Surplus Lines Taxes',
    path:'/SurplusLinesTaxes', 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Agency Support',
    path:'/AgencySupport', 
    icon:'', 
    explanation:'Customer support and contact information, live chat, questions and concerns, general help...'
}]

//NEW Business ROUTES
export const newBizInfo = [{
    title:'New Client',
    path:`${homeInfo[0].path}/NewClient`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Existing Client',
    path:`${homeInfo[0].path}/ExistingClient`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Current Submissions',
    path:`${homeInfo[0].path}/CurrentSubmissions`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
}]


//still need to incorporate the clients name in here
export const existingClientInfo =[{
    title:'Acords',
    path:`${newBizInfo[1].path}/Acords`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Files',
    path:`${newBizInfo[1].path}/Files`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Policies',
    path:`${newBizInfo[1].path}/Policies`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Accounting',
    path:`${newBizInfo[1].path}/Accounting`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Claims',
    path:`${newBizInfo[1].path}/Claims`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Quotes',
    path:`${newBizInfo[1].path}/Quotes`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},{
    title:'Additional Details',
    path:`${newBizInfo[1].path}/AdditionalDetails`, 
    icon:'', 
    explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'
},]