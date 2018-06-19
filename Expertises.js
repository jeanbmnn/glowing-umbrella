import React, { Component } from 'react';


class Expertises extends Component {
	render() {
		return(
			<div className="container-fluid">
				<div class="row">
				  <div class="col-sm-6">				
				  	De l’école primaire jusqu’au bac +2 (DUT, BTS) en passant par le collège et bien évidemment par le lycée, Explique-Moi Pythagore propose des enseignements dans les matières générales, telles que :
						<ul class="list-group list-group-flush">
						 	<li className="list-group-item">Les mathématiques</li>
						 	<li className="list-group-item">Le français</li>
						 	<li className="list-group-item">L’histoire-géographie</li>
						 	<li className="list-group-item">La physique-chimie</li>
						 	<li className="list-group-item">Les sciences de la vie et de la terre</li>
						 	<li className="list-group-item">L’anglais</li>
						 	<li className="list-group-item">L’espagnol</li>
						 	<li className="list-group-item">L’allemand</li>
						</ul>
					</div>
		  		<div class="col-sm-6">
		  			Mais aussi des matières plus ciblées selon la filière et les options !
						<ul class="list-group list-group-flush">
						 	<li className="list-group-item">Le droit</li>
						 	<li className="list-group-item">La philosophie</li>
						 	<li className="list-group-item">L’économie</li>
						 	<li className="list-group-item">Le marketing</li>
						 	<li className="list-group-item">L’histoire de l’art</li>
						 	<li className="list-group-item">L’italien</li>
						 	<li className="list-group-item">Le grec</li>
						 	<li className="list-group-item">Les « Spé »</li>
						</ul>
		  		</div>
				
				<center>Et bien d’autres, que vous soyez en filières générales, technologiques ou professionnelles !
				Notre réponse à votre demande de cours est centrée sur la personne demandant ce cours, vous saurez donc trouver, non pas chaussure à votre pied, mais bel et bien un professeur adapté !</center>
      </div></div>
		);

	}
}

export default Expertises;