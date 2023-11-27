import React from "react";
import Placeholder from "../images/placeholder.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Products = ({ id, data }) => {
    const navigate = useNavigate();
    const features = data.Features.slice(0, 4);
    const [imageError, setImageError] = useState(false);

    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-product">
                    <div className="single-product-top">
                        <span>{data.Category}</span>
                    </div>
                    <div className="single-product-bottom">
                        <div className="single-product-img">
                            {data.Image?.data && data.Image.data.length > 0 ? (
                                <img
                                    src={process.env.REACT_APP_DEV_URL + data.Image.data[0].attributes.url}
                                    alt=""
                                    
                                />
                            ) : (
                                <img src={Placeholder} alt=""/>
                            )}
                        </div>
                        {features.length > 0 && (
                            <div className="qualites">
                                {features.map((feature) => (
                                    <div className="qualities-img" key={feature.id}>
                                        <span>{feature.Feature_Name}</span>
                                        <div className="qualities-img-div">
                                        {feature.Feature_Image?.data?.[0]?.attributes?.url && (
                                            <img
                                            onLoad={() => setImageError(false)}
                                            onError={() => setImageError(true)}
                                            src={process.env.REACT_APP_DEV_URL + feature.Feature_Image.data[0]?.attributes.url}
                                            alt=""
                                            />
                                        )}
                                        {imageError && <span>Error loading image</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="product-btn justify-content-center">
                            <a href="https://wiflymobility.typeform.com/registro" className="common-button1 mr-2">
                                <span>Subcribe now</span>
                            </a>
                            <button href="#" className="common-button2" onClick={() => navigate("/product-page/" + id)}>
                                <span>Get more info</span>
                            </button>
                        </div>
                        <h5><strong>{data.Category} |</strong>  {data.Name}</h5>
                        <p>Starting at <strong>€{data.Basic_Price}/mo</strong>.</p>
                        {/* <div className="change-color mt-4">
                            <div className="form-check pl-0 color-outer">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="white" value={data.Color_1 || ""} />
                                <label className="white" htmlFor="white"></label>
                            </div>
                            <div className="form-check pl-0 color-outer">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="black" value={data.Color_2 || ""} />
                                <label className="black" htmlFor="black"></label>
                            </div>
                        </div> */}
                        <div>
                            <span className="new-color" style={{ backgroundColor: data.Color_in_hex }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;