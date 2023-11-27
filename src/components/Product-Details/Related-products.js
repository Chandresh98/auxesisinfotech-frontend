import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from "react-router-dom";
import Placeholder from "../images/placeholder.png"

const Related_products = ({ relatedProducts }) => {

    const settings = {
        dots: false,
        infinite: relatedProducts.length > 3, // Set to true if there are more than 3 slides
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: relatedProducts.length > 2, // Set to true if there are more than 2 slides
                    dots: false
                }
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: relatedProducts.length > 1, // Set to true if there are more than 1 slide
                }
            }
        ]
    };

    const navigate = useNavigate();
    const handleNavigationToSingleProduct = (productId) => {
        navigate(`/product-page/${productId}`, { state: { fromRelatedProducts: true } });
    };

    return (
        <>
            <div className="section-padding related-products">
                <div className="container">
                    <h2 className="main-heading2">More Colors</h2>
                    <div className="related-products-slider">
                        <Slider {...settings}>
                            {relatedProducts.map((relatedProduct) => (
                                <div className="single-product" key={relatedProduct.id}>
                                    <div className="single-product-top">
                                        <span>{relatedProduct.attributes.Category}</span>
                                    </div>
                                    <div className="single-product-bottom">
                                    <div className="single-product-img">
                                            {relatedProduct.attributes.Image?.data &&
                                                relatedProduct.attributes.Image.data.length > 0 ? (
                                                    <img
                                                        src={
                                                            process.env.REACT_APP_DEV_URL +
                                                            relatedProduct.attributes.Image.data[0].attributes.url
                                                        }
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <img
                                                        src={Placeholder}
                                                        alt=""
                                                        loading="lazy"
                                                        className="placeholder-image" // Add a class for styling if needed
                                                    />
                                                )}
                                        </div>
                                        <div className="product-btn justify-content-center">
                                            <a href="https://wiflymobility.typeform.com/registro" className="common-button1 mr-2">
                                                <span>Subcribe now</span>
                                            </a>
                                            {/* <Link to={`/product-page/${relatedProduct.id}`} className="common-button2"> <span>Get more info</span></Link> */}
                                            <button
                                            onClick={() => handleNavigationToSingleProduct(relatedProduct.id)}
                                            className="common-button2"
                                        >
                                            <span>Get more info</span>
                                        </button>
                                        </div>
                                        <h5><strong>{relatedProduct.attributes.Category} |</strong>  {relatedProduct.attributes.Name}</h5>
                                        <p>Starting at <strong>€{relatedProduct.attributes.Basic_Price}/mo</strong>.</p>
                                        {/* <div className="change-color mt-4">
                                            <div className="form-check pl-0 color-outer">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="white" value={relatedProduct.attributes.Color_1 || ""} />
                                                <label className="white" htmlFor="white"></label>
                                            </div>
                                            <div className="form-check pl-0 color-outer">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="black" value={relatedProduct.attributes.Color_2 || ""} />
                                                <label className="black" htmlFor="black"></label>
                                            </div>
                                        </div> */}
                                        <div>
                                            <span className="new-color" style={{ backgroundColor: relatedProduct.attributes.Color_in_hex }}></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Related_products;