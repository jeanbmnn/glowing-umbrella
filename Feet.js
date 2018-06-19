import React, { Component } from 'react';
import logo from './images/logo-emp-grand.png';
import google from './images/google-play-badge.png';
import apple from './images/app-store-badge.png';

class Feet extends Component{
	render() {
		return(
			
			<div id='feet'>
						    <a href='https://play.google.com/'><img id='badge' src={google} alt='google-play-badge'/></a>
						    <a href='https://www.apple.com/fr/ios/app-store/'><img id='badge' src={apple} alt='app-store-badge'/></a>
						    <a href='mailto:expliquemoipythagore@gmail.com' className="btn" id='feetbutton'>expliquemoipythagore@gmail.com</a>
			</div>
		);
	}
}

export default Feet;