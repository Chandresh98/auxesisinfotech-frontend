import React from "react";
import AsNavFor from "./Product-slider";

const Product_banner = ({ product }) => {

   


   return (
      <>
         
         <div className="product-banner bg-gray">
            <div className="container">
               <div className="product-banner-outer">
                  <div className="row">
                     <div className="col-lg-12">
                        <nav aria-label="breadcrumb">
                           <ol className="breadcrumb p-0 pb-4 mb-5">
                              <li className="breadcrumb-item"><a href="/shop">Catalog</a></li>
                              <li className="breadcrumb-item">Product</li>
                              <li className="breadcrumb-item active" aria-current="page">{product?.attributes?.Name}</li>
                           </ol>
                        </nav>
                     </div>
                     <div className="col-lg-6">
                        <div className="p-banner-slider">
                           <AsNavFor />
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="p-banner-contet" >
                           <h1><strong>{product?.attributes?.Name}</strong> Ibiza</h1>
                           <h3>${product?.attributes?.Price}</h3>
                           <p>{product?.attributes?.Description}</p>
                           <div className="price">
                              <div className="form-check">
                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                 <label className="form-check-label" htmlFor="exampleRadios1">
                                    Premium <strong>${product?.attributes?.Basic_Price}/mo.</strong>
                                 </label>
                              </div>
                              <div className="form-check">
                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                 <label className="form-check-label" htmlFor="exampleRadios2">
                                    Premium <strong>${product?.attributes?.Premium_Price}/mo.</strong>
                                 </label>
                              </div>
                              <div className="form-check">
                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                 <label className="form-check-label" htmlFor="exampleRadios3">
                                    Premium <strong>${product?.attributes?.Professional_Price}/mo.</strong>
                                 </label>
                              </div>
                           </div>
                           <div className="color mt-4">
                              <h5>Color</h5>
                              <div className="change-color">
                                 <div className="form-check pl-0 white">
                                    <input type="radio" id="white" value={product?.attributes?.Color_1} />
                                 </div>
                                 <div className="form-check pl-0 black">
                                    <input type="radio" id="black" value={product?.attributes?.Color_2} />
                                 </div>
                              </div>
                           </div>
                           <div className="accessories mt-4">
                              <h5>Accessories</h5>
                              {product?.attributes?.accessories?.data?.map((item) => ( 
                                           <div className="form-check checkinput">
                                           <input type="checkbox" id=""/>
                                           <label>{item.attributes.Accessories_Name} ${item.attributes.Accessories_Price}/{item.attributes.Accessories_Type}.</label>
                                        </div>
                                       ))}
                           </div>
                           
                           <div className="onetimedeposite">
                              <div className="form-check">
                                 <input className="form-check-input" type="radio" name="deposite" id="deposite" value="deposite" />
                                 <label className="form-check-label" htmlFor="deposite">
                                    One time deposit<strong> ${product?.attributes?.Deposite_Price}/mo.</strong>
                                 </label>
                              </div>
                           </div>
                           <div className="payment-breakup">
                              <h6><strong>Payment Break up</strong></h6>
                              <ul className="pl-0 mb-0">
                                 <li>
                                    <p>Monthly Payment
                                       <span data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-info"></i></span>
                                    </p>
                                    <strong>€100</strong>
                                 </li>
                                 <li>
                                    <p>Upfront Payment
                                       <span data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-info"></i></span>
                                    </p>
                                    <strong>€100</strong>
                                 </li>
                              </ul>
                           </div>
                           <div className="mt-5">
                              <a href="/delivery" className="common-button1"><span>Add to cart</span></a>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>


         <div className="modal fade information-modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
               <div className="modal-content">
                  <div className="modal-body">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                     </p>
                     <ul>
                        <li className="check"><i className="fa-regular fa-circle-check mr-3"></i>Sin permanencia minima *</li>
                        <li className="check"><i className="fa-regular fa-circle-check mr-3"></i>Maintenance every 3 months</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Product_banner;