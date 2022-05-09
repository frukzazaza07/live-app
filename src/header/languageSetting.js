import { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import LocaleContext from "../language-setting/localeContext";
import { Dropdown } from "react-bootstrap";


export default function LanguageSetting(props) {
    const { t } = useTranslation();
    const { locale } = useContext(LocaleContext);

    const languageHeightRef = useRef(null);
    useEffect(() => {
        props.setLanguageSetting({ height: languageHeightRef.current.offsetHeight });
    }, [])

    function changeLocale(l) {
        if (locale !== l) {
            i18n.changeLanguage(l);

        }
    }
    return (
        <div ref={languageHeightRef} className="nav-language-contaniner d-flex justify-content-between p-3 align-items-center">
            <div className="nav-language-left">
                {t('changeLanguage')}
            </div>
            <div className="nav-language-right">
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {t('language')}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => changeLocale('en')}>English</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeLocale('th')}>ภาษาไทย</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}