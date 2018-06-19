import React, { Component } from 'react';


class Values extends Component {
	render() {
		return(
			<div id="about" className="container-fluid">	

		    <div className="accordion" id="accordionExample">
				  <div className="card">
				    <div className="card-header" id="headingOne">
				      <h5 className="mb-0">
				        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				          Pédagogie : Des professeurs qualifiés et vérifiés
				        </button>
				      </h5>
				    </div>

				    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
				      <div className="card-body">
				        Explique-Moi Pythagore se fait un point d’honneur de la qualité pédagogique et des qualifications de ses professeurs.
						Chaque professeur est soumis à une analyse de dossier et à deux entretiens qui sont supervisés par les dirigeants d’Explique-Moi Pythagore et des professeurs référents, diplômés par l’Etat.
						Ces deux entretiens nous permettent d’évaluer les niveaux enseignables par nos professeurs et de contrôler leurs méthodes et leurs pédagogies, afin de s’assurer qu’elles correspondent avec les valeurs d’Explique-Moi Pythagore !
						Un suivi régulier de nos professeurs est effectué pour assurer la pérennité de la qualité et l’efficacité des cours à domicile.
				      </div>
				    </div>
				  </div>
				  <div className="card">
				    <div className="card-header" id="headingTwo">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				          Efficacité : une méthode performante
				        </button>
				      </h5>
				    </div>
				    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
				      <div className="card-body">
				        Pythagore, philosophe de grande renommée et mathématicien, né vers 580 avant Jésus-Christ, 
				        créa son école dans laquelle le premier devoir des étudiants était de vaincre leurs passions. 
				        A cette même époque, tout enseignement se transmettait par voie orale. 
				        Aujourd’hui, Explique-Moi Pythagore et tous ses professeurs font en sorte de transmettre leur savoir, à l’oral comme à l’écrit, 
				        avec des outils pédagogiques reconnus afin que l’élève, l’étudiant ou le doctorant puisse aimer la matière qu’il repousse tant, 
				        dans laquelle il excelle le moins, ou se perfectionner dans la matière où il réussit déjà très bien.
				      </div>
				    </div>
				  </div>
				  <div className="card">
				    <div className="card-header" id="headingThree">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
				          Réactivité : Un besoin urgent
				        </button>
				      </h5>
				    </div>
				    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
				      <div className="card-body">
				        Vous avez besoin d’un cours dans une heure, ce soir, demain ou la semaine prochaine ?
						Un contrôle demain ? un devoir maison à rendre ? Un examen ou encore un oral ? 
						Nous saurons répondre favorablement à votre besoin ! 
						Nous savons l’importance de répondre urgemment à un besoin de cours afin de rassurer l’élève, l’étudiant ou le parent.
						C’est pourquoi nous nous appliquons à fournir un service de qualité adapté à votre besoin, et tout cela chez vous.
				      </div>
				    </div>
				  </div>
				  <div className="card">
				    <div className="card-header" id="headingFour">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
				          Proximité : Un soutien à domicile
				        </button>
				      </h5>
				    </div>
				    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
				      <div className="card-body">
				        Grâce à notre système de recherche, les professeurs qualifiés les plus proches de votre domicile sont contactés afin de privilégier la proximité, la rapidité de déplacement.
						Que le cours soit demandé pour dans une heure ou dans une semaine, le professeur sera à votre domicile au jour et à l’heure que vous aurez décidés.
						Le cours à domicile a l’énorme avantage de se dérouler dans un lieu familier à l’élève. De ce fait, il sera plus apte à recevoir, écouter et comprendre le cours, la méthode et l’apprentissage qui lui seront livrés par notre professeur.
					   </div>
				    </div>
				  </div>
				</div>

      		</div>
		);

	}
}

export default Values;