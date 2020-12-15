import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageCarousel = () => {
  

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return (
    <Carousel responsive={responsive} 
     containerClass="carousel-container" itemClass="carousel-item-padding-10-px"  swipeable={false}
     draggable={false}>
    <div><img src="/assets/img/img-1.png"  className="img-fluid"   alt="img-1"/>
      <h6>Play Demo</h6>
    </div>
    <div><img src="/assets/img/img-2.png" className="img-fluid" alt="img-1"/>
    <h6>Play Demo</h6>
    </div>
    <div><img src="/assets/img/img-3.png" className="img-fluid"  alt="img-1"/>
    <h6>Play Demo</h6>
    </div>
    <div><img src="/assets/img/img-1.png" className="img-fluid"  alt="img-1"/>
    <h6>Play Demo</h6>
    </div>
    <div><img src="/assets/img/img-2.png" className="img-fluid" alt="img-1"/>
    <h6>Play Demo</h6>
    </div>
    <div><img src="/assets/img/img-1.png" className="img-fluid"  alt="img-1"/>
    <h6>Play Demo</h6>
    </div>
    <div><img src="/assets/img/img-3.png" className="img-fluid" alt="img-1"/>
    <h6>Play Demo</h6>
    </div>
    <div><img src="/assets/img/img-2.png" className="img-fluid" alt="img-1"/>
    <h6>Play Demo</h6>
    </div>
    </Carousel>
                
      
    )
}

export default ImageCarousel
