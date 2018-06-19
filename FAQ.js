import React, { Component } from 'react';

import question from './images/question.png'

class FAQ extends Component {
	render() {
		return(
			
			<div>
				<div id="about" className="container-fluid">

					<div className="media">
					  <img className="mr-3" src={question} alt="Generic placeholder image"/>
					  <div className="media-body">
					    <cite>
					    	A l’aide de l’application ou du site, les élèves ont la possibilité de demander directement un cours au moment où ils en ont besoin,
					    	mais quel contrôle avons-nous, parents, sur leurs demandes ?</cite>

					    <div className="media mt-3">
					      <div className="media-body">
					        Notre support est conçu pour être utilisé directement par les élèves et étudiants, cependant, parents, n’ayez crainte : 
					        vous serez prévenus de toute inscription et de toute demande de cours via notre plateforme 
					        (par le biais d’un mail ou d’un sms) qui émanerait de votre progéniture !
					      </div>
					    </div>
					  </div>
					</div>
					<br/>
					<br/>
					<div className="media">
					  <img className="mr-3" src={question} alt="Generic placeholder image"/>
					  <div className="media-body">
					    <cite>
					    	Comment assurez-vous le suivi de vos professeurs et des cours donnés ?</cite>

					    <div className="media mt-3">
					      <div className="media-body">
					        Un retour via un formulaire de la part du professeur ayant donné le cours, 
					        et de même un retour via un formulaire rapide de la part de la famille ayant demandé notre soutien, nous sont communiqués, 
					        ceci afin de mieux suivre nos professeurs tout au long de leur mission chez nous et
					        de mieux connaitre les besoins des familles qui font appel à nous.
					      </div>
					    </div>
					  </div>
					</div>
					<br/>
					<br/>
					<div className="media">
					  <img className="mr-3" src={question} alt="Generic placeholder image"/>
					  <div className="media-body">
					    <cite>
					    	Quels sont les points vérifiés par Explique-Moi Pythagore pour la qualification des professeurs ?</cite>

					    <div className="media mt-3">
					      <div className="media-body">
					        Nos professeurs sont tous soumis à une vérification d’expérience, de diplômes, 
					        Label EMP pour notre philosophie centrée sur l’élève ou l’étudiant, et l’extrait du CJN est demandé. 
									A ces vérifications s’ajoutent deux entretiens sur les compétences pédagogiques et les valeurs morales des professeurs.
					      </div>
					    </div>
					  </div>
					</div>
      	</div>
      </div>
		);

	}
}

export default FAQ;