import React from 'react';

const SectionThree = props => {
	return <div className='section transparent p-0'>
		<div id='cbf-section-3' className='container-fluid animated z-depth-5'>
			<div className='container'>

				<div className='row m-0'>
					<div className='left-pane col s12 m12 l7'>
						<h3 className='right-3'>
							Formaci&oacute;n Acad&eacute;mica
						</h3>
					</div>
					<div className='right-pane col s12 m12 l5'></div>
				</div>

				<hr className='opacity-0'/>

				<div className='row m-0 col-same-height'>
					<div className='col s12 m12 l12'>
						<h4 className='right-6'>
							Universidad Tecnol&oacute;gica Nacional - Facultad Regional Avellaneda
						</h4>
					</div>

					<div className='left-pane col s12 m12 l3  center-align valign-wrapper'>
						<img src='./images/utn_logo.png' alt='Oracle Logo' className='circle responsive-img hoverable transform-0 z-depth-5 logo cbf-logo-oracle'/>
					</div>

					<div className='right-pane col s12 m12 l9 valign-wrapper'>

						<p className='italic opacity-0 right-align'>
							2017 - 2018[Interrumpida]
						</p>

						<h5 className='opacity-0'>
							Tecnicatura Superior en Programaci&oacute;n
						</h5>

						<p className='bold cbf-tech opacity-0'></p>
					</div>
				</div>

				<hr className='opacity-0'/>

				<div className='row m-0 col-same-height'>
					<div className='col s12 m12 l12'>
						<h4 className='right-9'>
							E.E.T.N°2 Dr. Salvador Debenedetti
						</h4>
					</div>

					<div className='left-pane col s12 m12 l3 center-align valign-wrapper'>
						<img src='./images/logo_eetn2.png' alt='CABA Logo' className='circle responsive-img hoverable transform-0 z-depth-5 logo cbf-eetn2-logo'/>
					</div>
					
					<div className='right-pane col s12 m12 l9 valign-wrapper'>
						<p className='italic opacity-0 right-align'>
							Marzo 2006 - Diciembre 2010
						</p>

						<h5 className='opacity-0'>
							Técnico en Electrónica
						</h5>
					</div>
				</div>

			</div>
		</div>
	</div>
};

export default SectionThree;