import React from 'react';
import { Parallax } from 'react-materialize';

const ParallaxCBF = props => {

	const { index, content } = props;

	if(!index) {
		return null;
	}

	return <Parallax id={`cbf-parallax-${index}`} image={
	<>
		{content}
		<img alt='' src={`./images/background-${index}.jpg`}/>
	</>}/>;
};

export default ParallaxCBF;