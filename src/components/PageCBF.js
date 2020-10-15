import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../index.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import ParallaxCBF from './parallax/ParallaxCBF';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import SectionFour from './sections/SectionFour';
import SectionFive from './sections/SectionFive';

const PageCBF = props => {

	//Comportamiento de la imagen de perfil en el scroll.
	const profilePicScaleOnScroll = () => {
		let animatedElementsIds = ['cbf-section-1', 'cbf-section-2', 'cbf-section-3', 'cbf-section-4'];

		animatedElementsIds.forEach( animatedElementId =>{
			let animatedHtmlElement = document.getElementById(animatedElementId);
			let rect;
			let viewPortHeight = parseInt($(window).height());
			let halfViewPortHight = parseInt(viewPortHeight / 2);
			let closeless = parseInt(viewPortHeight * .35);
			
			$(document).scroll(()=>{
				rect = animatedHtmlElement.getBoundingClientRect();
				// console.log(rect.top, rect.bottom);
				let imagePosition = parseInt((rect.bottom+rect.top)/2);
				
				if( imagePosition>0 && Math.abs(parseInt(halfViewPortHight-imagePosition))<= closeless )
				{
					if( $(`#${animatedElementId}`).hasClass('hidden') ) {
						$(animatedHtmlElement).removeClass('hidden')
					}
				}
				else
				{
					if( !$(`#${animatedElementId}`).hasClass('hidden') ) {
						$(animatedHtmlElement).addClass('hidden')
					}
				}
			});
		});
	};

	$(document).ready(function()
	{
		profilePicScaleOnScroll();
	});

	const parallax1Content = <div className='container'>
		<h1 className='cv-title'>
			Curriculum Vitae
		</h1>
		<h6 className='react-title'>
			Made with ReactJS
			&nbsp;
			<FontAwesomeIcon icon={faReact}/>
		</h6>
		<h3>Cristian Ferrero</h3>
	</div>;

	return <div id='cbf-page'>

		<ParallaxCBF index='1' content={parallax1Content}/>

		<SectionOne/>

		<ParallaxCBF index='2'/>
		
		<SectionTwo/>

		<ParallaxCBF index='3'/>
		
		<SectionThree/>

		<ParallaxCBF index='4'/>
		
		<SectionFour/>

		<ParallaxCBF index='5'/>
		
		<SectionFive/>

	</div>;
};

export default PageCBF;