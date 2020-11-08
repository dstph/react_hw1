import React from 'react';
import './article-style.css'

class ArticleComponent  extends React.Component {
	constructor(props) {
		super(props);
		this.heading = props.heading;
		this.articleText = props.articleText;
		this.className = props.className;

	}

	render(){
		return(
			<div className={`article-card ${ this.className}`}>
				<div className="up-frame">
					<h2>{this.heading}</h2>
				</div>
				<div className="down-frame">
					<p>{this.articleText}</p>
				</div>
			</div>

		)
	}
}

export default ArticleComponent;