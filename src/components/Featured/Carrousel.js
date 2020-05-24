import React from 'react';
import Slider from "react-slick";

import taylor1 from '../../resources/images/taylor1.jpg';
import taylor2 from '../../resources/images/taylor2.jpg';
import taylor3 from '../../resources/images/taylor3.jpg';
import taylor4 from '../../resources/images/taylor4.jpg';

const Carrousel = () => {

	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 1000
	}

	return (
		<div
			className="corrousel_wrapper"
			style={{
				height: `${window.innerHeight}px`,
				overflow: 'hidden'
			}}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${taylor1})`,
							height: `${window.innerHeight}px`
						}}
					>
					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${taylor2})`,
							height: `${window.innerHeight}px`
						}}
					>
					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${taylor3})`,
							height: `${window.innerHeight}px`
						}}
					>
					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${taylor4})`,
							height: `${window.innerHeight}px`
						}}
					>
					</div>
				</div>
			</Slider>
			
		</div>
	)
}

export default Carrousel;