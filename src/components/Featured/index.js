import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
	return (
		<div style={{postion:'relative'}}>

			<Carrousel/>

			<div className="artist_name">
				<div className="wrapper">
					Taylor Swift
				</div>
			</div>
			<TimeUntil/>

		</div>
	)
}

export default Featured;