import React, { Component } from 'react';


class About extends Component {
	render() {
		return(
			<div  className="container-fluid">
        	<h3 className='h3'>Qui sommes-nous ?</h3>
        	<article className="container" id="about">
        	  Explique-Moi Pythagore est une société née de la demande permanente et grandissante de cours de soutien 
        	  dans des domaines toujours plus nombreux.
          	<br/>
				      Que ce soit pour maintenant ou pour plus tard.
				      <br/>
				      Que ce soit pour des élèves ou étudiants en difficulté ou simplement pour un perfectionnement pour un contrôle, 
				      un devoir, un examen, un oral ou un concours.
				      <br/>
				      Sans contrainte d’engagement : Vous avez un problème ? Nous avons la solution.
				      <br/>
				      <br/>
				      Pensée, créée et fondée par Corentin Orry, professeur de mathématiques, Lucas Orry,
				       titulaire d’un DUT GE2I et étudiant en droit éco gestion et Clément Baumann,
				       professeur de Physique Chimie et étudiant à Epitech, 
				       Explique-Moi Pythagore a pour objectif de proposer des cours de soutien scolaire de tous niveaux, 
				       ajustés au plus près à votre demande, ceci avec l’aide d’un support conforme à l’évolution technologique de notre ère : 
				       un site internet et une application fonctionnels et séduisants.

				    <br/><br/>   
				    <cite id='citation'>Il n’y a pas de problème qui ne saurait trouver une solution chez nous.
				    <br/>
				    EMP</cite>
				    </article>
				    
      	</div>
      	
		);

	}
}

export default About;