import React from 'react'; 
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
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
        <ButtonBack className="slider-izq-button">Izq</ButtonBack>
        <Slider className="slider">
          <Slide className="slide" index={0}><img src="BannerZapatillas.webp" alt="Banner de Zapatillas"></img></Slide>
          <Slide className="slide" index={1}>Segundo Slide</Slide>
          <Slide className="slide" index={2}>Tercer Slide</Slide>
        </Slider>
        <ButtonNext className="slider-der-button">Der</ButtonNext>
      </CarouselProvider>}
      </div>)
}

export default Home;
