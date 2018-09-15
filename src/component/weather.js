import React from "react";

const weather = props =>(
	
			 <div> 
			{
				props.city&&props.country&& <p className="weather__key"> Location:
				<span className="weather__value">{props.city},{props.country}</span>
				</p>
			}
			{
				props.temperature&&<p className="weather__key" > temperature: 
				<span className="weather__value">{props.temperature}</span>
				</p>
			}	
			{
				props.temperature&&<p className="weather__key"> humidity: 
				<span className="weather__value">{props.humidity}</span>
				</p>
			}
			{
				props.description&& <p className="weather__key">description: 
				<span className="weather__value">{props.description}</span>
				</p>
			} 
			{
				props.error&&<p className="weather__key"> <span>{props.error} </span></p>
			}
			 
			 </div>
			);
	


export default weather;