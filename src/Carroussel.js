import React, { Component } from 'react';
import diplomation from './images/diplomation.jpg'
import diplomation2 from './images/diplomation2.jpg'
import fille from './images/fillequisaute.jpg'
import exp from './images/expertises.jpg'
import faq from './images/faq.jpg'
import meth from './images/methodes.jpg'
import val from './images/valeurs.jpg'


class Carroussel extends Component {
	render () {
		return(
			<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			      <img id='carroussel' className="d-block w-100" src={diplomation} alt="First slide"/>
			      <div className="carousel-caption d-none d-md-block">
				    <h1>EXPLIQUE-MOI PYTHAGORE</h1>
				    <button onClick={this.props.greet} type="button" className="btn btn-outline-primary"> Découvrir </button>
				  </div>
			    </div>
			    <div className="carousel-item">
			      <img id='carroussel' className="d-block w-100" src={diplomation2} alt="Second slide"/>
			      <div className="carousel-caption d-none d-md-block">
				    <h1></h1>
				    <button type="button" class="btn btn-outline-primary"> Aller </button>
				  </div>
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
		);
	}
}


export default Carroussel;