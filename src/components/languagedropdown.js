import React from 'react';
import EN from './images/united-kingdom.png';
import ES from './images/spain.png';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Change the language

        // Store the selected language in localStorage
        localStorage.setItem('selectedLanguage', lang);
    }; 

    return (
        <>
            <div className="dropdown language-translator">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa-solid fa-globe"></i>
                </button>
                <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href='' onClick={() => changeLanguage('en')}>
                        <img src={EN} alt="EN" className="language-flag" loading="lazy"></img> English
                    </a>
                    <a className="dropdown-item" href='' onClick={() => changeLanguage('es')}>
                        <img src={ES} alt="ES" className="language-flag" loading="lazy"></img> Spanish
                    </a>
                </div>
            </div>
        </>
    );
};

export default LanguageDropdown;
