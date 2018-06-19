import React, { Component } from 'react';


class Methodes extends Component {
	render() {
		return(
		
      <div id="about" className="container-fluid">	

		    <div className="accordion" id="accordionExample">
				  <div className="card">
				    <div className="card-header" id="headingOne">
				      <h5 className="mb-0">
				        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				          Pédagogie
				        </button>
				      </h5>
				    </div>

				    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
				      <div className="card-body">
				        <ol>
							 		<li>Cibler les difficultés de l’élève ou étudiant</li>
								 	<li>Analyser sa méthode de compréhension</li>
								 	<li>Choisir la méthode d’explication la plus adaptée</li>
								 	<li>Vérifier l’assimilation de l’explication en mettant en application</li>
								 	<li>Suivre la compréhension de l’élève lors des cours ultérieures (si régulier)</li>
								</ol>
				      </div>
				    </div>
				  </div>
				  <div className="card">
				    <div className="card-header" id="headingThree">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
				          Recrutement
				        </button>
				      </h5>
				    </div>
				    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
				      <div className="card-body">
				        <ol>
								 	<li>Vérifier les compétences du professeur : entretien pédagogique et moral</li>
								 	<li>Tester son sens pédagogique : mise en pratique</li>
								 	<li>Sélectionner les niveaux et matières enseignables</li>
								</ol>
				      </div>
				    </div>
				  </div>
				  <div className="card">
				    <div className="card-header" id="headingFour">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
				          Suivi et acquisition
				        </button>
				      </h5>
				    </div>
				    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
				      <div className="card-body">
				       	<ol>
									<li>Bilans réguliers des cours assurés (dans l’urgence ou réguliers)</li>
								 	<li>Examens pédagogique et méthodologique</li>
								 	<li>Formations pour les outils d’analyse de méthode de compréhension</li>
								</ol>
					  	</div>
				    </div>
				  </div>
				</div>

      		</div>
		);

	}
}

export default Methodes;