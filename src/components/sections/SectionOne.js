import React from 'react';
import { Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const SectionOne = props => {
	return <div className='section transparent p-0'>
		<div id='cbf-section-1' className='container-fluid animated z-depth-5'>
			<div id='cbf-background-1'></div>
			<div className='container'>
				<div className='row m-0'>
					<div className='left-pane col s12 m12 l7'>
						<h3 className='opacity-0'>
							Cristian Blas Ferrero
						</h3>
						<h5 className='right-1'>
							Desarrollador
						</h5>
						<h6 className='right-2'>
							<i className='tiny material-icons'>person</i> &nbsp;&nbsp;27 años
						</h6>
						<h6 className='right-3'>
							<i className='tiny material-icons'>location_on</i>
							&nbsp;&nbsp;
							Monte Grande, Buenos Aires,
							Argentina
						</h6>
						<h6 className='right-4'>
							<i className='tiny material-icons'>email</i>
							<a href='mailto: cristian.ferrero1992@gmail.com'>
								&nbsp;&nbsp;
								cristian.ferrero1992@gmail.com
							</a>
						</h6>
						<h6 className='right-5'>
							<i className='tiny material-icons'>phone</i>
							<a href='tel: +5401155056986'>
								&nbsp;&nbsp;
								+54 011 5505 6986
							</a>
						</h6>
						<br />
						<div className='icons-container'>
							<Button className='btn-floating btn-large linkedin-bg-color waves-effect waves-light z-depth-3 transform-0 tooltipped' data-position='bottom' tooltip='LinkedIn' href='https://www.linkedin.com/in/ferrerocristian92/' target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faLinkedin} size='2x'/>
							</Button>

							<Button className='btn-floating btn-large github-bg-color waves-effect waves-light z-depth-3 transform-0 tooltipped' data-position='bottom' tooltip='GitHub' href='https://github.com/TresComaCatorce' target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faGithub} size='2x'/>
							</Button>

							<Button className='btn-floating btn-large stackoverflow-bg-color waves-effect waves-light z-depth-3 transform-0 tooltipped' data-position='bottom' tooltip='Stack Overflow' href='https://stackoverflow.com/users/12065313/ferrero-cristian' target='_blank' rel='noopener noreferrer'>
								<FontAwesomeIcon icon={faStackOverflow} size='2x'/>
							</Button>
						</div>
					</div>

					<div className='right-pane col s12 m12 l5 valign-wrapper center-align'>
						<img id='cbf-profile-pic' src='./images/perfil.png' alt='' className='circle materialboxed responsive-img hoverable cursor-pointer transform-1 z-depth-5' />
					</div>
				</div>
			</div>
		</div>
	</div>
};

export default SectionOne;