import ImageSlider, { Slide } from "react-auto-image-slider";

const divStyle = {
  width: "100px",
  height: "%100px",
  backgroundColor : "red",
}

function Slideshow() {
  return (

    <div style = {divStyle}>
      <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img4" src="./slaytlar/slayt1.png" />
      </Slide>
      <Slide>
        <img alt="img4" src="./slaytlar/slayt2.png" />
      </Slide>
      <Slide>
        <img alt="img3" src="./slaytlar/slayt3.png" />
      </Slide>
      <Slide>
        <img alt="img2" src="./slaytlar/slayt4.png" />
      </Slide>
      <Slide>
        <img alt="img1" src="./slaytlar/slayt5.png" />
      </Slide>
    </ImageSlider>
    </div>
  );
}

export default Slideshow;