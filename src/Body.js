import React, { Component } from 'react';

import Carroussel from './Carroussel';

import logo from './images/logo.png'

import About from './About.js';
import Values from './Values.js';
import Expertises from './Expertises.js';
import Methodes from './Methodes.js';
import Pricing from './Pricing.js';
import Primaire from './Primaire.js';
import College from './College.js';
import Lycee from './Lycee.js';
import FAQ from './FAQ.js';



class Body extends Component {
	constructor(){
		super();
		this.state = {page: <About/>,
									pageName: 'A propos',
									parentPage: 'Accueil'
								};

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(id, name, parent='Accueil') {
	    this.setState({page: id, pageName: name, parentPage: parent});
	    this.forceUpdate();
	}

	onGreet(){
		alert("Wesh gros");
	}

	render(){
		return(

			<div id='bodyy'>

				<nav className="navbar sticky-top navbar-expand-lg navbar-dark" id='navbar' >
				  <a className="navbar-brand"><img id='logo-navbar' src={logo}/></a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" onClick={() => this.handleClick(<About/>, 'A propos')}>	
				        	A propos
				        </a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" onClick={() => this.handleClick(<Values/>, 'Nos Valeurs')}>
				        	Nos valeurs
				        </a>
				      </li>

				      <li className="nav-item">
				        <a className="nav-link" onClick={() => this.handleClick(<Expertises/>, 'Nos expertises')}>
				        	Nos expertises
				        </a>
				      </li>

				      <li className="nav-item">
				        <a className="nav-link" onClick={() => this.handleClick(<Methodes/>, 'Nos méthodes')}>
				        	Nos méthodes
				        </a>
				      </li>

				      <li className="nav-item dropdown">
				        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Forfaits
				        </a>
				        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
				        	<a className="dropdown-item" onClick={() => this.handleClick(<Primaire/>, 'Primaire', 'Tarifs')}>Primaire</a>
				          <a className="dropdown-item" onClick={() => this.handleClick(<College/>, 'Collège', 'Tarifs')}>Collège</a>
				          <a className="dropdown-item" onClick={() => this.handleClick(<Lycee/>, 'Lycée', 'Tarifs')}>Lycée</a>
				        </div>
				      </li>

				      <li className="nav-item">
				        <a className="nav-link" onClick={() => this.handleClick(<FAQ/>, 'FAQ')}>
				        	FAQ
				        </a>
				      </li>


				    </ul>
				    <ul className='navbar-nav mr-right'>
				    	<li className="nav-item">
				        <a className="nav-link disabled">Connexion</a>
				      </li>

				      <li className="nav-item">
				        <a className="nav-link disabled">S'incrire</a>
				      </li>
				    </ul>
				  </div>
				</nav>


				<Carroussel gret={this.onGreet}/>
				

				<nav aria-label="breadcrumb">
				 <ol className="breadcrumb">
				   <li className="breadcrumb-item" id='breadcrumb'>
				   <a id='tarif-link' onClick={() => {this.handleClick(<About/>, 'A propos', 'Accueil')}}>
				   		{this.state.parentPage}
				   </a>
				   </li>
				   <li className="breadcrumb-item active" id='breadcrumb'>{this.state.pageName}</li>
				 	</ol>
				</nav>

				{this.state.page}

			</div>
		);
	}


}

export default Body;