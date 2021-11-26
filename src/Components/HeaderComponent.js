import React from 'react'

export default function HeaderComponent() {
    return (
        <div className="header-root">
            <div className="header-wrapper safe-area">
                <div className="header-container">
                    <div className="logo-block">
                        <img src="https://uygunakiraladev.komut.team/static/media/company-name.52199d64.svg" alt="logo" />
                    </div>
                    <div className="search-block ">
                        <div className="search-item b-radius-5">
                        <input type="text" placeholder="search.." />
                        </div>
                    </div>
                    <div className="option-block j-c-between">
                        <div className="location-select d-flex-center">
                            <p className="selector-item">Şehir seçiniz <span>+</span> </p>
                        </div>
                        <div className="advert-item d-flex-center btn-fll">
                            <span>İlan Ver +</span>
                        </div>
                        <div className="user-auth d-flex-center ">
                            <p>+ Oturum Aç veya Kaydol</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
