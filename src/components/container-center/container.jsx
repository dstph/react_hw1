import React from 'react';
import './container-style.css'
import BtnComponent from '../btn/btn';

class ContainerCenterComponent extends React.Component {

	render(){
		return(
			<div className="container-center">
				<BtnComponent text="Yeap"/>
				<BtnComponent text="Fuck" className="error"/>
				<BtnComponent text="Great" className="success"/>
			</div>
		)
	}
}

export default ContainerCenterComponent;