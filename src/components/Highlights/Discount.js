import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton.js';

class Discount extends Component {

	state={
		discountStart: 0,
		discountEnd: 30
	}

	percentage = () => {
		if(this.state.discountStart < this.state.discountEnd){
			this.setState({
				discountStart: this.state.discountStart+1
			})
		}
	}

	componentDidUpdate(){
		setTimeout(()=>{
			this.percentage()
		},30)
	}

	render() {
		return (
			<div className="center_wrapper">
				<div className="discount_wrapper">

					<Fade onReveal={()=>this.percentage()}>
						<div className="discount_porcentage">
							<span>{this.state.discountStart}%</span>
							<span>OFF</span>
						</div>
					</Fade>
					<Slide right>
						<div className="discount_description">
							<h3>Purchase tickets before 10th July</h3>
							<p>Semper risus in hendrerit gravida. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Eget aliquet nibh praesent tristique. Leo vel orci porta non pulvinar neque laoreet. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Tortor at risus viverra adipiscing at in tellus integer. Hac habitasse platea dictumst quisque.</p>
							
							<MyButton 
								text="Purchase Tickets"
								bck="orange"
								color="white"
								link="http://google.com"
							/>

						</div>
					</Slide>

				</div>	
			</div>
		)
	}
}

export default Discount;