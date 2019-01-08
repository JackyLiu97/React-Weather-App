import React from 'react';


function Weather(props) {
    return (
        <div>
           {
                props.city && props.country && <p>Location:
                <span> {props.city}, {props.country} </span>
                </p> 
            }
           {
               props.temperature && <p>Temperature: 
               <span> {Math.round((props.temperature*1.8)+32)} F </span>
               </p> 
            }
            { 
                props.humidity && <p>Humidity: 
                <span> {props.humidity} </span>
                </p> 
            }
            {   props.description && <p>Conditions: 
            <span> {props.description} </span>
                </p>
            }
            {   props.error && 
                <p> Please enter a City and Country 
                </p>
            }
        </div>
    )
}

export default Weather;