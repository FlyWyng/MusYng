import React, { Component } from 'react';

import MyButton from '../utils/MyButton.js';
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

	state = {
		prices: [1000, 2000, 5000],
		positions: ['General', 'Star', 'VIP'],
		desc: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus.',
			'Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Tellus mauris a diam maecenas sed. Semper risus in hendrerit gravida rutrum quisque. Dolor sit amet consectetur adipiscing elit duis.',
			'Tincidunt tortor aliquam nulla facilisi. Lacus vel facilisis volutpat est velit egestas. Integer vitae justo eget magna. Venenatis lectus magna fringilla urna. Mi proin sed libero enim.'
		],
		linkto: ['http://sales/g','http://sales/s','http://sales/v'],
		delay: [750,0,750]
	}

showBoxes = () => (
		this.state.prices.map((box,i)=>(
			<Zoom delay={this.state.delay[i]} key={i}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>₹{this.state.prices[i]}</span>
							<span>{this.state.positions[i]}</span>
						</div>
						<div className="pricing_description">
							{this.state.desc[i]}
						</div>
						<div className="pricing_buttons">
							<MyButton 
								text="Purchase"
								bck="orange"
								color="white"
								link={this.state.linkto[i]}
							/>
						</div>
					</div>
				</div>
			</Zoom>
		))
	)

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>

					<div className="pricing_wrapper">
						{this.showBoxes()}
					</div>
				</div>
			</div>
		)
	}
}

export default Pricing;