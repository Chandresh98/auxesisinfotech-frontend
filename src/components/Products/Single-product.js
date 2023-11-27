import useFetch from "../../hooks/usefetch";
import { useParams } from "react-router-dom";
import AsNavFor from "./Product-slider";
import Features from '../Product-Details/features';
import Free_trial from '../Product-Details/Free-trial'
import FAQ from '../Product-Details/Faq'
import Trial1 from "../images/free-trial2.png"
import Trial2 from "../images/free-trial1.png"
import Related_products from "../Product-Details/Related-products";
import ReactPlayer from 'react-player/youtube'
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Placeholder from "../images/placeholder.png"


const Single_Product = () => {

    const { t, i18n } = useTranslation();
    const location = useLocation();

    const [color, setColor] = useState();
    const [price, setPrice] = useState(0);
    const [accessories, setAccessories] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // Initialize with a default value
    const [monthValue, setMonthValue] = useState(0);
    const [radioValue, setRadioValue] = useState(0);
    const [monthltPrice, setMonthltPrice] = useState(0);
    const [peopleInfo, setPeopleInfo] = useState({});

    useEffect(() => {
        localStorage.setItem('color', color)
        localStorage.setItem('price', price)
        if (location.state && location.state.fromListingPage) {
            window.scrollTo(0, 0);
        }
        if (location.state && location.state.fromRelatedProducts) {
            window.scrollTo(0, 0);
        }
    }, [color, price, location.state])

    useEffect(() => {
        // Loop through and clear accessory data from localStorage when component mounts
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('accessoryData_')) {
                localStorage.removeItem(key);
            }
        }
    }, []);


    function handleRadioChange(value, price) {
        setRadioValue((value));
        localStorage.setItem('price', radioValue)
        // console.log(value, price)
        if(value == "Basic"){
            // console.log(product.Basic_Price)
            setMonthValue(price)
        }
        if(value == "Premium"){
            setMonthValue(price)
            // console.log(product.Premium_Price)
        }
        if(value == "Professional"){
            setMonthValue(price)
            // console.log(product.Basic_Price)
        }
        
        // setMonthltPrice(parseFloat(monthValue) + parseFloat(value));
    }



    function handleCheckboxChange(e, item) {
        console.log(e)
        const { id, attributes } = item;
        const accessoryData = {
            Accessories_Name: attributes.Accessories_Name,
            Accessories_Price: attributes.Accessories_Price,
            Accessories_Type: attributes.Accessories_Type,
        };

        console.log(accessoryData);
        if (e.target.checked)  {
            // Only add the price if Accessories_Type is "mo."
            if (attributes.Accessories_Type === "mo.") {
                console.log(monthValue)
                setMonthValue(
                    parseFloat(monthValue)+ parseFloat(attributes.Accessories_Price)
                  );
            }else{
                // one time
                setTotalPrice(parseFloat(attributes.Accessories_Price))
            }
        } else {
            if (attributes.Accessories_Type === "mo.") {
                setMonthValue(
                    parseFloat(monthValue)- parseFloat(attributes.Accessories_Price)
                 );
            }else{
                setTotalPrice(0)
            }
        }

console.log(totalPrice)
        // Use the id as part of the localStorage key
        const localStorageKey = `accessoryData_${id}`;

        if (e.target.checked) {
            // If checked, store accessory data in localStorage
            const existingData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
            existingData.push(accessoryData);
            localStorage.setItem(localStorageKey, JSON.stringify(existingData));
        } else {
            // If unchecked, remove accessory data from localStorage
            localStorage.removeItem(localStorageKey);
        }

        // Update the 'accessories' state if needed
        setAccessories(e.target.value);

    }


    useEffect(() => {
        // Get the selected language from localStorage
        const selectedLanguage = localStorage.getItem('selectedLanguage');

        if (selectedLanguage) {
            // Set the language in i18next
            i18n.changeLanguage(selectedLanguage);
        }

    }, []);
    

    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useFetch(`/api/products?locale=${i18n.language}&populate=accessories&populate=related_products&populate=related_products.Image&populate=Image&populate[0]=Features&populate[1]=Features.Feature_Image&[filters] [id]=${id}`);
    if (!data) return;
    if (!data || !data.data || !data.data[0]) {
        return null; // or handle the case when data is not available
      }
      const product = data.data[0].attributes;

      const fee = product?.Delivery_fee
      localStorage.setItem('deliveryFee', fee);

      const productImages = product?.Image?.data?.map((imageData) => {
        return process.env.REACT_APP_DEV_URL + imageData.attributes.url;
      }) || [Placeholder];


    return (

        <>
            {/* ---------------Product Banner-------------------- */}
            <div className='body-inner pt'>
                <div className="product-banner bg-gray">
                    <div className="container">
                        <div className="product-banner-outer" key={id}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb p-0 pb-4 mb-5">
                                            <li className="breadcrumb-item"><a href="/shop">{t('Header_link1')}</a></li>
                                            <li className="breadcrumb-item">{t('Product')}</li>
                                            <li className="breadcrumb-item active" aria-current="page">{product.Category} {product.Name} </li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-banner-slider">
                                        <AsNavFor productImages={productImages} />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <form>
                                        <div className="p-banner-contet" >
                                            <h1><strong>{product.Category}</strong> {product.Name}</h1>
                                            <h3>€{product.Price}</h3>
                                            <p>{product.Description}</p>
                                            <div className="price">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={product.Basic_Price || "" }

                                                        onChange={(e) => handleRadioChange(e.target.value = "Basic",product.Basic_Price )}  />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        Basic <strong>€{product.Basic_Price}/mo.</strong>
                                                        <span data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-info"></i></span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={product.Premium_Price || ""} onChange={(e) => handleRadioChange(e.target.value = 'Premium', product.Premium_Price)} />
                                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                                        Premium <strong>€{product.Premium_Price}/mo.</strong>
                                                        <span data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-info"></i></span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value={product.Professional_Price || ""} onChange={(e) => handleRadioChange(e.target.value = "Professional", product.Professional_Price)} />
                                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                                        Professional <strong>€{product.Professional_Price}/mo.</strong>
                                                        <span data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-info"></i></span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <div className="color mt-4">
                                                <h5>Color</h5>
                                                <div className="change-color mt-4">
                                                    <div className="form-check pl-0 color-outer">
                                                        <input className="form-check-input" type="radio" name="color" id="white" value={product.Color_1 || ""} onChange={e => setColor(e.target.value)} />
                                                        <label className="white" htmlFor="white"></label>
                                                    </div>
                                                    <div className="form-check pl-0 color-outer">
                                                        <input className="form-check-input" type="radio" name="color" id="black" value={product.Color_2 || ""} onChange={e => setColor(e.target.value)} />
                                                        <label className="black" htmlFor="black"></label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {product.Color_in_hex && (
                                                <div className="d-flex align-items-center">
                                                    <h6 className="mr-2 mb-0"><strong>Color:</strong></h6>
                                                    <span className="new-color" style={{ backgroundColor: product.Color_in_hex }}></span>
                                                </div>
                                            )}
                                            {product?.accessories?.data?.length > 0 && (
                                                <div className="accessories mt-4">
                                                    <h5>Accessories</h5>
                                                    {product?.accessories?.data?.map((item) => (
                                                        <div className="form-check checkinput" key={item.id}>
                                                            <input
                                                                type="checkbox"
                                                                id={item.id}
                                                                value={item.attributes.Accessories_Name}
                                                                name="accessories[]"
                                                                onChange={(e) => handleCheckboxChange(e, item)}
                                                            />
                                                            <label htmlFor={item.id}>
                                                                {item.attributes.Accessories_Name} €{item.attributes.Accessories_Price}/{item.attributes.Accessories_Type}
                                                            </label>
                                                        </div>
                                                    ))}

                                                </div>
                                            )}

                                            <div className="onetimedeposite">
                                                <div className="form-check radio-input">
                                                    <input value={product.Deposite_Price || ""} type="radio" name="deposite" id="deposite" checked />
                                                    <label className="form-check-label" htmlFor="deposite" >
                                                        {t('One time deposit')}<strong> €{product.Deposite_Price}</strong>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="payment-breakup">
                                                <h6><strong>{t('Payment Break up')}</strong></h6>
                                                <ul className="pl-0 mb-0">
                                                    <li>
                                                        <p>{t('Monthly Payment')}
                                                            <span data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-info"></i></span>
                                                        </p>
                                                        <strong>€{monthValue}</strong>
                                                    </li>
                                                    <li>
                                                        <p>{t('Upfront Payment')}
                                                            <span data-toggle="modal" data-target="#exampleModal"><i className="fa-solid fa-info"></i></span>
                                                        </p>
                                                        <strong>€{product.Deposite_Price + totalPrice}</strong>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-5">
                                                <button className="common-button1" to="/delivery?fromProductDetails=true" onClick={() => navigate("/delivery/" + id)}><span>{t('Add to cart')}</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------Related Products---------------------------- */}
                {product?.related_products?.data && product.related_products.data.length > 0 && (
                    <Related_products relatedProducts={product.related_products.data} />
                )}
                {/* ---------------Features-------------------- */}
                <Features features={product.Features} />
                {/* ---------------Wifly Works-------------------- */}
                {product.Product_Video_Link ? (
                    <div className="wifly-works section-padding">
                        <div className="container">
                            <div className="wifly-works-outer">
                                <h2 className="main-heading2 text-left">{t('Product_Page_Videosection_heading')}</h2>
                                <ReactPlayer url={product.Product_Video_Link} width="100%" height={500} />
                            </div>
                        </div>
                    </div>
                ) : null}

                {/* ---------------Specifications-------------------- */}
                <div className="specifications section-padding bg-gray">
                    <div className="container">
                        <div className="specifications-outer">
                            <h2 className="main-heading2 text-left">{t('Product_Page_Specifications_heading')}</h2>
                            <div>
                                <div className="single-specification">
                                    <span><strong>Size</strong></span>
                                    <div className="specification-right">
                                        <p>{product.Size}</p>
                                    </div>
                                </div>
                                <div className="single-specification">
                                    <span><strong>Weight</strong></span>
                                    <div className="specification-right">
                                        <p>{t(product.Weight)}</p>
                                    </div>
                                </div>
                                <div className="single-specification">
                                    <span><strong>Power</strong></span>
                                    <div className="specification-right">
                                        <p>{t(product.Power)}</p>
                                    </div>
                                </div>
                                <div className="single-specification">
                                    <span><strong>Battery Life</strong></span>
                                    <div className="specification-right">
                                        <p>{t(product.Battery_Life)}</p>
                                    </div>
                                </div>
                                <div className="single-specification">
                                    <span><strong>Components</strong></span>
                                    <div className="specification-right">
                                        {t(product.Components)}
                                    </div>
                                </div>
                                <div className="single-specification">
                                    <span><strong>Tire Size</strong></span>
                                    <div className="specification-right">
                                        {t(product.Tire_Size)}
                                    </div>
                                </div>
                                <div className="single-specification">
                                    <span><strong>Additional Features</strong></span>
                                    <div className="specification-right">
                                        {t(product.Additional_Features)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------------Free Trial-------------------- */}
                <Free_trial heading={t('Product_Page_Free_Trial_heading')} paragraph={t('Product_Page_Free_Trial_paragraph')} image={Trial2} image2={Trial1} button={t('Product_Page_Free_Trial_button')} />

                {/* ---------------FAQ-------------------- */}
                {/* <FAQ /> */}
            </div>

            {/* -------------------------------------------------------------------- */}

            <div className="modal fade information-modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

export default Single_Product;