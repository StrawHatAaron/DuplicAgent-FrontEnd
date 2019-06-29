import React from 'react'
import './GridChooser.scss'

const homeInfo = [{title:'New Business', icon:'', explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'},
    {title:'Renewals', icon:'', explanation:'View all assigned renewals, update status/progress, access documents and information for renewals...'},
    {title:'Accounting', icon:'', explanation:'Run financial reports, view or create new invoices, statements, accounts receiveable/payable...'},
    {title:'Service', icon:'', explanation:'Issue standard Acord forms, help clients with general policy questions, admin tasks, urgent requests...'},
    {title:'Resources', icon:'', explanation:'Admin support tools, statistics and marketing materials, important agency files...'},
    {title:'Calendar', icon:'', explanation:'View or set new reminders, events, meetings, and keep track of important personal & business dates... '},
    {title:'Surplus Lines Taxes', icon:'', explanation:'Create new customer profile, start new quote for an existing customer, review previous submissions...'},
    {title:'Agency Support', icon:'', explanation:'Customer support and contact information, live chat, questions and concerns, general help...'}]
const homeContent = homeInfo.map((info) => {
    return(
        <div className="section">
            <div className="title">
                {info.title}
            </div>
            <div className="explanation">
                {info.explanation}
            </div>
            
            
            
        </div>
    )
})

export default function GridChooser(){
    return(
        <div className="grid-choose">
            {homeContent}
        </div>
    )
}