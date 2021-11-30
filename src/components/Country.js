import { useState } from "react";

const Country = ({countries}) => {

    const [hovered, setHovered] = useState(false);
    const [image, setImage] = useState(null);
    
   
    const PopUp = () => {

        return(
        <div>
        <div className="country_information" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
            <p>Capital: {countries.capital}</p>
            <p>Population: {countries.population}</p>
           {/* // <p>{countries.languages}</p> */}
            <div>{countries.maps.openStreetMaps}</div>
            
        </div>
        {hovered}
        </div>
        )
    }
   
    return(
        <div id="country_and_flag">
            <p>{countries.name.common}</p>
            <div className="flag">{countries.flag}</div>
            <img src={countries.maps.openStreetMaps}/> 
            <p>Capital: {countries.capital}</p>
            <p>Population: {countries.population}</p>
            {/* <div>{countries.maps.openStreetMaps}</div> */}
            <button onClick={() => PopUp} onClick={() => PopUp}> More Information</button>
        </div>
        

        
        

    )






}

export default Country;
