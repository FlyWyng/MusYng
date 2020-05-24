import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
	return (
		<footer 
			style={{
				background: '#80267E'
			}}
		>
			<Fade delay={500}>
				<div className="font_righteous footer_logo_venue">
					MusYng
				</div>
				<div className="footer_copyright">
					FlyWyng 2020. All rights reserved.
				</div>
			</Fade>
		</footer>
	)
}

export default Footer;