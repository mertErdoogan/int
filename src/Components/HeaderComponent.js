import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import SelectPicker from 'rsuite/SelectPicker';
import 'rsuite/dist/rsuite.min.css';


export default function HeaderComponent() {

    const data = [
        {
          "label": "Fashion",
          "value": "Fashion",
          "role": "Master"
        },
        {
          "label": "Sport",
          "value": "Sport",
          "role": "Master"
        }
      ];

    return (
        <div className="header-root">
            <div className="header-wrapper safe-area">
                <div className="header-container">
                    <div className="logo-block">
                        <img src="https://uygunakiraladev.komut.team/static/media/company-name.52199d64.svg" alt="logo" />
                    </div>
                    <div className="search-block ">
                        <div className="search-item b-radius-5">
                            <div className="icon-block">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <input type="text" className="search-input" />
                            <div className="dropdown-select">
                                <SelectPicker data={data} />
                            </div>
                        </div>
                    </div>
                    <div className="option-block j-c-between">
                        <div className="location-select d-flex-center">
                            <p className="selector-item">Şehir seçiniz <FontAwesomeIcon icon={faChevronDown} /> </p>
                        </div>
                        <div className="advert-item d-flex-center btn-fll">
                            <span>İlan Ver <FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                        <div className="user-auth d-flex-center ">
                            <p><FontAwesomeIcon icon={faSignInAlt} /> Oturum Aç veya Kaydol</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
