import React, { Component } from 'react';


class Pricing extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.onClick(e.target.value);
	}

	render() {
		return(
			<div id="about" className="container-fluid">
        
				

			<div class="row">
			  <div class="col-sm-3">
				<div className="card" id='carte'>
				  <div className="card-body">
				    <h3 className="card-title">Primaire</h3>
				    <p className="card-text">Découvrez nos tarifs écoliers</p>
				    <a href="#" className="btn btn-primary">Découvrir</a>
				  </div>
				</div>
			  </div>
			  <div class="col-sm-3">
				<div className="card" id='carte'>
				  <div className="card-body">
				    <h3 className="card-title">Collège</h3>
				    <p className="card-text">Découvrez nos tarifs collégiens</p>
				    <a href="#" className="btn btn-primary">Découvrir</a>
				  </div>
				</div>
			  </div>	

			  <div class="col-sm-3">
				<div className="card" id='carte'>
				  <div className="card-body">
				    <h3 className="card-title">Lycée</h3>
				    <p className="card-text">Découvrez nos tarifs lycéens</p>
				    <a href="#" className="btn btn-primary" onClick={this.handleChange}>Découvrir</a>
				  </div>
				</div>
			  </div>
     		</div>
     	</div>
		);

	}
}

export default Pricing;