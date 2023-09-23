import axios from 'axios'



const axio = async(city)=>{

    try{

    
    const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=2e79714ed3064c21b0c54131232309&q="+city+"&aqi=no")
    return response.data
    }catch(error){
        console.error(error)
    }
}
      
    
    

    

  


export default axio