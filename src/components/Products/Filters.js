import React from "react";
import F_Img1 from "../images/type.png"
import F_Img2 from "../images/price-tag.png"
import F_Img3 from "../images/fast.png"
import F_Img4 from "../images/arrows.png"
import { useTranslation } from 'react-i18next';

const Filters = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className="Filters fil-desktop">
                <h4>{t('Filters_Heading')}</h4>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                <div><img src={F_Img1} alt="" loading="lazy"></img>{t('Filters1_Heading')}</div> <div className="filter-icon"><i className="fa fa-minus"></i> <i className="fa-solid fa-plus"></i></div>
                            </a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body FiltersInner">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />City
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />All terrain
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />Mountain
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                <div><img src={F_Img2} alt="" loading="lazy"></img> {t('Filters2_Heading')}</div> <div className="filter-icon"><i className="fa fa-minus"></i> <i className="fa-solid fa-plus"></i></div>
                            </a>
                        </div>
                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                            <div className="card-body FiltersInner">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />City
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />All terrain
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />Mountain
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                <div><img src={F_Img3} alt="" loading="lazy"></img>
                            {t('Filters3_Heading')}</div> <div className="filter-icon"><i className="fa fa-minus"></i> <i className="fa-solid fa-plus"></i></div>
                            </a>
                        </div>
                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                            <div className="card-body FiltersInner">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />City
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />All terrain
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />Mountain
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                <div><img src={F_Img4} alt="" loading="lazy"></img>
                            {t('Filters4_Heading')}</div> <div className="filter-icon"><i className="fa fa-minus"></i> <i className="fa-solid fa-plus"></i></div>
                            </a>
                        </div>
                        <div id="collapseFour" className="collapse" data-parent="#accordion">
                            <div className="card-body FiltersInner">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />City
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />All terrain
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" value="" />Mountain
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="reset-btn">{t('Reset')}</button>
                </div>
            </div>
            <div className="Filters fil-responsive">
                <div id="accordion-1">
                <div className="card">
                    <div className="card-header p-0 text-right" id="heading-1-1">
                        <h5 className="mb-0">
                            <a className="collapsed card-link d-flex" role="button" data-toggle="collapse" href="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                <h4>Filters (3) </h4> <i className="fa-solid fa-chevron-up"></i> <i className="fa-solid fa-chevron-down"></i>
                            </a>
                        </h5>
                    </div>
                    <div id="collapse-1-1" className="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-1">
                        <div className="card-body border-0"> 

                            <div id="accordion-1-1">
                                <div className="card">
                                    <div className="card-header" id="heading-1-1-1">
                                        <h5 className="mb-0">
                                            <a className="collapsed card-link" role="button" data-toggle="collapse" href="#collapse-1-1-1" aria-expanded="false" aria-controls="collapse-1-1-1">
                                                <div><img src={F_Img1} alt="" loading="lazy"></img> Types of bike</div> <div className="filter-icon"><i className="fa fa-minus"></i> <i className="fa-solid fa-plus"></i></div>
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse-1-1-1" className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-1">
                                        <div className="card-body">
                                            <div className=" FiltersInner">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />City
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />All terrain
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />Mountain
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading-1-1-2">
                                        <h5 className="mb-0">
                                            <a className="collapsed card-link" role="button" data-toggle="collapse" href="#collapse-1-1-2" aria-expanded="false" aria-controls="collapse-1-1-2">
                                                <div><img src={F_Img2} alt="" loading="lazy"></img> Price/Month</div> <div className="filter-icon"><i className="fa fa-minus"></i> <i className="fa-solid fa-plus"></i></div>
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse-1-1-2" className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-2">
                                        <div className="card-body">
                                            <div className=" FiltersInner">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />City
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />All terrain
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />Mountain
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading-1-1-3">
                                        <h5 className="mb-0">
                                            <a className="collapsed card-link" role="button" data-toggle="collapse" href="#collapse-1-1-3" aria-expanded="false" aria-controls="collapse-1-1-3">
                                                <div><img src={F_Img3} alt="" loading="lazy"></img>
                                                Range</div> <div className="filter-icon"><i className="fa fa-minus"></i> <i className="fa-solid fa-plus"></i></div>
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse-1-1-3" className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-3">
                                        <div className="card-body">
                                            <div className=" FiltersInner">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />City
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />All terrain
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />Mountain
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading-1-1-4">
                                        <h5 className="mb-0">
                                            <a className="collapsed card-link" role="button" data-toggle="collapse" href="#collapse-1-1-4" aria-expanded="false" aria-controls="collapse-1-1-4">
                                                <div><img src={F_Img4} alt=""></img>
                                                Foldable</div> <div className="filter-icon"><i className="fa fa-minus"></i> <i className="fa-solid fa-plus"></i></div>
                                            </a>
                                        </h5>
                                    </div>
                                    <div id="collapse-1-1-4" className="collapse" data-parent="#accordion-1-1" aria-labelledby="heading-1-1-4">
                                        <div className="card-body">
                                            <div className=" FiltersInner">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />City
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />All terrain
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="" />Mountain
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}


export default Filters;