import React from 'react';

const SectionFour = props => {
	return <div className='section transparent p-0'>
		<div id='cbf-section-4' className='container-fluid animated z-depth-5'>
			<div className='container'>

				<div className='row m-0'>
					<div className='left-pane col s12 m12 l7'>
						<h3 className='right-3'>
							Cursos y seminarios
						</h3>
					</div>

					<div className='right-pane col s12 m12 l5'></div>
				</div>

				<hr className='opacity-0'/>

				<div className='row m-0 col-same-height'>
					<div className='col s12 m12 l12'>
						<h4 className='right-6'>
							Curso de JAVA SSE - Nivel inicial e intermedio
						</h4>
					</div>

					<div className='left-pane col s12 m12 l3  center-align valign-wrapper'>
						<img src='./images/utn_logo.png' alt='Oracle Logo' className='circle responsive-img hoverable transform-0 z-depth-5 logo cbf-logo-oracle'/>
					</div>

					<div className='right-pane col s12 m12 l9 valign-wrapper'>
						<p className='italic opacity-0 right-align'>2014</p>

						<h5 className='opacity-0'>
							Universidad Tecnol&oacute;gica Nacional - Facultad Regional Avellaneda
						</h5>

						<p className='bold cbf-tech opacity-0'>
							Curso donde se explica desde cero el concepto de POO en JAVA SSE. Tambi&eacute;n se
							explican conceptos más avanzados de POO.
						</p>
					</div>
				</div>

			</div>
		</div>
	</div>;
};

export default SectionFour;