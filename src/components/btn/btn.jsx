import React from 'react';
import './btn-style.css'

class BtnComponent extends React.Component {
	constructor(props) {
		super(props);
		this.text = props.text;
		this.className = props.className
	
	}

	render(){
		return(
			<button className={`button ${ this.className}`}>{this.text}</button>
		)
	}
}

export default BtnComponent;