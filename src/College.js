import React, { Component } from 'react';

class College extends Component {
	render(){
		return(
			<div>
			  <table className="table table-light table-hover">
			  <thead className="table-primary">
			    <tr>
			      <th scope="col">Forfait</th>
			      <th scope="col">Cours</th>
			      <th scope="col">Prix</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <th scope="row">Postulant</th>
			      <td>1</td>
			      <td>20€</td>

			    </tr>
			    <tr>
			      <th scope="row">Néophyte</th>
			      <td>5</td>
			      <td>90€</td>
			    </tr>
			    <tr>
			      <th scope="row">Acousmaticien</th>
			      <td>20</td>
			      <td>380€</td>
			    </tr>
					<tr>
			      <th scope="row">Mathématicien</th>
			      <td>10 par mois</td>
			      <td>2200€</td>
			    </tr>
			  </tbody>
			</table>
			Tarifs fictifs
			</div>
		);
	}
}

export default College;


