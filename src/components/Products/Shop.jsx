import React from "react";
import Filters from "./Filters";
import Shop_products from "./Products";
import Cycle from "../images/rotating-wheel.gif";
import { fetchDataFromApi } from "../../utils/api"
import { useEffect, useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useTranslation } from 'react-i18next';
import Cookies from "js-cookie";

const Shop = () => {

    const { t, i18n } = useTranslation();
    const { products, setProducts } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [showNoProductFound, setShowNoProductFound] = useState(false);

    useEffect(() => {
        // Get the selected language from localStorage
        const selectedLanguage = localStorage.getItem('selectedLanguage');
        
        if (selectedLanguage) {
            // Set the language in i18next
            i18n.changeLanguage(selectedLanguage);
        }
        else {
            i18n.changeLanguage('en');
        }

        getProducts();
    }, []);

    // Get the selected language from the 'selectedLanguage' cookie
    const selectedLanguage = Cookies.get('selectedLanguage');

    const getProducts = () => {
        fetchDataFromApi(`/api/products?locale=${i18n.language}&populate=accessories&populate=Image&populate[0]=Features&populate[1]=Features.Feature_Image`)
        
            .then((res) => {
                console.log(res);
                if (res.data && res.data.length > 0) {
                    setProducts(res);
                } else {
                    setShowNoProductFound(true);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            });
    }


    return (
        <>
            <div className='body-inner pt'>
                <div className="shop-page section-padding">
                    <div className="container-fluid px-3">
                        <div className="shop-page-inner">
                            <h2 className="main-heading">{t('Product_Page_Heading')}</h2>
                            <div className="row mt-5 pt-5">
                                {/* <div className="col-lg-3 pl-0">
                                    <Filters/>
                                </div> */}
                                <div className="col-lg-12">
                                {isLoading ? (
                                        <p>Loading...</p>
                                    ) : showNoProductFound ? (
                                        <div className="no-product-found">
                                            <div className="no-product-img">
                                                <img src={Cycle} alt="" loading="lazy"></img>
                                            </div>
                                            <h3>Oops!</h3>
                                            <p>No product found...</p>
                                        </div>
                                    ) : (
                                        <Shop_products products={products} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Shop;