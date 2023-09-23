import React from 'react'
import './All.css'

export default function TempBox({temp,text,icon,location,tempf,wind}) {
  return (
    <div className='tempCoin'>
        <div className='tempBox1'>
        <div style={{display:'flex'}}>
        <img   src={icon} alt='auto'/>
        <h1>{text}</h1>
        </div>
<h1>Location:{location}</h1>
<h1>Temperature:{temp} C , {tempf} F</h1>
<h1>Wind Speed : {wind} KPH</h1>



        </div>
    </div>
  )
}
