import React from "react";
import logoimg from "./images/new-logo.png"
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect } from "react";
import LanguageDropdown from "./languagedropdown";
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const {t} = useTranslation();

    useEffect(() => {

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 10) {
                $(".main-header").addClass("sticky-header");
            }
            else {
                $(".main-header").removeClass("sticky-header");
            }
        });

    }, [])
    console.log(window.location.pathname.split('/').slice(1)[0]);

    const removeLanguage = window.location.pathname.split('/').slice(1)[0];


    return (
        <>
            <header className="main-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg px-0">
                        <a className="navbar-brand p-0" href="/">
                            <img src={logoimg} alt="" loading="lazy"></img>
                        </a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/shop">{t('Header_link1')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/service-plans">{t('Header_link2')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/timeline">{t('Header_link3')}</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <a href="https://app.wifly.app" target="_blank" className="common-button1"><span>{t('Header_button')}</span></a>
                                { removeLanguage !== 'product-page' && <LanguageDropdown/>}
                                
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}


export default Navbar;