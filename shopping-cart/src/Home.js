import React from 'react'; 
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import useWindowDimensions from './utilities';

function Home(){
  const { height, width } = useWindowDimensions();
      return(
      <div>{
      <CarouselProvider className='slider-prov'
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={3}
      visibleSlides={1}>
        <Slider className="slider">
          <Slide className="slide" index={0}>Primer Slide</Slide>
          <Slide className="slide" index={1}>Segundo Slide</Slide>
          <Slide className="slide" index={2}>Tercer Slide</Slide>
          
        </Slider>
        <div className='slider-buttons-prov'>
          <ButtonBack className="slider-izq-button">Izq</ButtonBack>
          <DotGroup 
            dotNumbers={true}/>
          <ButtonNext className="slider-der-button">Der</ButtonNext>
        </div>
      </CarouselProvider>}
      </div>)
}

export default Home;
