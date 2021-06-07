
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './style.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
 
 const Slider =()=> (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} 
    interval={6000}
  >
    <div data-src="../images/1.png" />
    <div data-src="../images/3.png" />
	<div data-src="../images/4.png" />
    <div data-src="../images/5.png" />
  </AutoplaySlider>
	
);




 

export default function Carousell(){
	return(
	<div>
		<Slider />
	</div>


);
	}

