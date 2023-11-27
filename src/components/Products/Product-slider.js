import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function AsNavFor({ productImages }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1, slider2;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  const slidesToShow = Math.min(3, productImages.length); // Limit to 3 or the number of available images
  const isInfinite = productImages.length > 3;

  return (
    <div>
      <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
        {productImages.map((image, index) => (
          <div className="p-slide" key={index}>
            <img src={image} alt="" loading="lazy"></img>
          </div>
        ))}
      </Slider>
      {productImages.length > 1 && ( // Render thumbnail slider only if there is more than 1 image
        <Slider
          asNavFor={nav1}
          ref={(slider) => (slider2 = slider)}
          slidesToShow={slidesToShow}
          swipeToSlide={true}
          focusOnSelect={true}
          infinite={isInfinite}
          arrows={isInfinite} // Show arrows only if there are more than 3 images
        >
          {productImages.map((image, index) => (
            <div className="thumbnail" key={index}>
              <div className="thumbnail-img">
                <img src={image} alt="" loading="lazy"></img>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default AsNavFor;
