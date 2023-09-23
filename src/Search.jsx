import React, { useState } from 'react'
import './All.css'
import axio from './axios/axi'
import TempBox from './TempBox'


export default function Search() {
    const [city,setCity] =useState('')
    const [temp,setTemp] =useState('')
    const [icon,setIcon] =useState('');
    const [check,setCheck] =useState(false)
    const [text,setText] = useState('')
    const [location,setLocation] =useState('')
    const [tempf,setTempf] =useState('')
    const [wind,setWind] =useState('')


    const search = async()=>{
        try{
            const data = await axio(city)
            console.log(data.current.temp_c)
            setTemp(data.current.temp_c)
            setIcon(data.current.condition.icon)
            setText(data.current.condition.text)
            setCheck(true)
            setLocation(data.location.name)
           setTempf(data.current.temp_f)
         setWind(data.current.wind_kph)

        }catch(error){
            console.error(error)

        }


    }
    const Change =(e)=>{
        e.preventDefault()
        setCity(e.target.value)
       

    }

    const cut =()=>{
      setCheck(false)
      setCity(null)

    }
  return (
    <div className='searchCoin'>
    <h1 style={{textAlign:'center'}}>Know Your City Wheather</h1>
    <div className='searchBox1'>
    <label htmlFor='ask'>Enter Your City</label>
    <div>
    <input name='ask' placeholder='enter city name' value={city} type='text' onChange={Change} />
       <button onClick={search}>search</button></div>
      
    </div>
   
    <div  className={check?"serchBox3":'serchBox2'}>
    
     {check?

        <div id='tempBoxContainer'>
        <button className='xButton' onClick={cut}>X</button>

        <TempBox temp={temp}  text={text} icon={icon} location={location} tempf={tempf} wind={wind}/>
        
        





        </div>:<div style={{textAlign:'center'}}> <h1>Sahil</h1></div>}
    </div>
    

    </div>
    
  )
}
