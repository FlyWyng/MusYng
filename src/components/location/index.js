import React from 'react'

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe 
				title="myFrame"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.7163448565443!2d77.11707026802542!3d28.748233928304096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0127947c9d65%3A0x12ce9ec01b812d4e!2sDelhi%20Technological%20University%2C%20Shahbad%20Daulatpur%20Village%2C%20Rohini%2C%20Delhi%2C%20110042!5e0!3m2!1sen!2sin!4v1590062011981!5m2!1sen!2sin" 
				width="100%" 
				height="550px" 
				frameBorder="0" 
				allowFullScreen
			></iframe>

			<div className="location_tag">
			  <div>Location</div>
			</div>
		</div>
	)
}

export default Location;