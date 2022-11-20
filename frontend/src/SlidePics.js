import ImageSlider, { Slide } from "react-auto-image-slider";

function Slideshow() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={1000}>
      <Slide>
        <img alt="img2" src="slayt1.jpg" />
      </Slide>
      <Slide>
        <img alt="img2" src="slayt2.png" />
      </Slide>
      <Slide>
        <img alt="img1" src="slayt3.png" />
      </Slide>
    </ImageSlider>
  );
}

export default Slideshow;