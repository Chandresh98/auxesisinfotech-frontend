import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetch";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Product_data = ({ activeStep }) => {

    const { t } = useTranslation();

    const [accessoryData, setAccessoryData] = useState([]);

    useEffect(() => {
        // Define a function to fetch accessory data from localStorage
        const fetchAccessoryData = () => {
            const storedData = [];
            for (let i = 1; i <= localStorage.length; i++) {
                const key = localStorage.key(i - 1);
                if (key.startsWith('accessoryData_')) {
                    const data = JSON.parse(localStorage.getItem(key));
                    storedData.push(...data);
                }
            }
            return storedData;
        };

        // Fetch accessory data when the component mounts
        const data = fetchAccessoryData();
        setAccessoryData(data);
    }, []);

    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters] [id]=${id}`);
    if (!data) return;
    const product = data.data[0].attributes


    const GetCookie = Cookies.get('details');

    const priceData = localStorage.getItem("price");
    const colorData = localStorage.getItem("color");


    const isundefinedContent = localStorage.getItem("price") === "undefined";
    const isundefinedContent2 = localStorage.getItem("color") === "undefined";
    const isundefinedContent3 = localStorage.getItem("accessoryData") === "undefined";

    function calculateTotal() {
        const localStoragePrice = parseFloat(localStorage.getItem("price")) || 0;
        const monthAccessoriesTotal = accessoryData
            .filter(item => item.Accessories_Type === "mo.")
            .reduce((accumulator, item) => {
                return accumulator + parseFloat(item.Accessories_Price);
            }, 0);
        const total = localStoragePrice + monthAccessoriesTotal;
        return total.toFixed(2);
    }

    function calculateSubTotal() {
    const monthAccessoriesTotal = accessoryData
        .filter(item => item.Accessories_Type === "one time.")
        .reduce((accumulator, item) => {
            return accumulator + parseFloat(item.Accessories_Price);
        }, 0);

    const deliveryFee = parseFloat(localStorage.getItem('deliveryFee')) || 0;

    const subtotal = monthAccessoriesTotal + deliveryFee;
    return subtotal.toFixed(2);
}


    const subTotal = calculateSubTotal();

    Cookies.set('subTotal', subTotal, { expires: 1, path: '/' });

    function calculateTotal2() {
        const subTotal = calculateSubTotal();
        return (parseFloat(subTotal) + parseFloat(product.Deposite_Price)).toFixed(2);
    }


    return (

        <>
            <div className="form-right-middle bg-gray">
                <h3 className="text-center mb-4" onClick={GetCookie}>{t('Monthly_charge')}</h3>
                <div>
                    <div className="top">
                        <div className="top-img">
                            <img src={process.env.REACT_APP_DEV_URL + product.Image.data[0].attributes.url} alt="" loading="lazy"></img>
                        </div>
                        <div>
                            <h4><strong>{product.Category} | </strong>{product.Name}</h4>
                            {isundefinedContent2 ? null : (
                                <div className="color mt-4">
                                    <div className="change-color">
                                        <div className="form-check pl-0 d-flex align-items-center">
                                            <h5>{t('Color')}</h5>
                                            <span className={localStorage.getItem("color")}></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bottom">
                        <ul className="pl-0 mb-0">
                            {isundefinedContent ? null : (
                                <li>
                                    <div>
                                        <h4 className="mb-0"><strong>Wifly |</strong> Premium service</h4>
                                        <p>cost per month</p>
                                    </div>
                                    <span><strong> €{parseFloat(localStorage.getItem("price")).toFixed(2)} </strong></span>
                                </li>)}
                            {accessoryData
                                .filter(item => item.Accessories_Type === "mo.")
                                .map((item, index) => (
                                    <li key={index}>
                                        <div>
                                            <h4 className="mb-0">{item.Accessories_Name}</h4>
                                            <p>cost per month</p>
                                        </div>
                                        <span><strong>${item.Accessories_Price.toFixed(2)}</strong></span>
                                    </li>
                                ))}
                            {
                                isundefinedContent && accessoryData.length === 0 ? null : (
                                    <li className="top-line">
                                        <div>
                                            <h4 className="mb-0"><strong>Total</strong></h4>
                                            <p>cost per month</p>
                                        </div>
                                        <span><strong>€{calculateTotal()}</strong></span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="form-right-bottom">
                <h3 className="text-center">{t('Initial_Payment')}</h3>
                <ul className="pl-0 mb-0">
                    {accessoryData
                        .filter(item => item.Accessories_Type === "one time.")
                        .map((item, index) => (
                            <li key={index}>
                                <strong>{item.Accessories_Name}</strong> <span>€{item.Accessories_Price.toFixed(2)}</span>
                            </li>
                        ))}
                    <li><strong>{t('Delivery fee')}</strong> <span><strong>€{localStorage.getItem('deliveryFee')}</strong></span></li>
                    <li className="top-line">
                        <strong>Sub Total</strong> <span><strong>€{calculateSubTotal()}</strong></span>
                    </li>
                    <li>{t('One time deposit')} {product.Category} <span><strong>€{product.Deposite_Price.toFixed(2)}</strong></span></li>
                    <li><strong>Total</strong> <span><strong>€{calculateTotal2()}</strong></span></li>
                </ul>
            </div>

        </>

    )
}

export default Product_data;