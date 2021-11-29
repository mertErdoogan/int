import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faPlus, faSignInAlt, faPhoneAlt, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function FooterComponent() {
    return (
        <div className="footer-root">
            <div className="footer-wrapper safe-area">
                <div className="footer-container">
                    <div className="content-block">
                        <div className="content-item">
                            <ul>
                                <li className="title">Uyguna Kirala</li>
                                <li>Hakkımızda</li>
                                <li>Kültür</li>
                                <li>Yatırımcılar</li>
                                <li>Kariyerler</li>
                                <li>İletişim</li>
                                <li>Faydamız</li>
                                <li>Site Haritası</li>
                            </ul>
                        </div>
                        <div className="content-item">
                            <ul>
                                <li className="title">Bilgi</li>
                                <li>Blog</li>
                                <li>SSS</li>
                                <li>Gerekli Belgeler</li>
                                <li>Daha Akıllı Bir Hayat Kılavuzunuz</li>
                                <li>Site Haritası</li>
                            </ul>
                        </div>
                        <div className="content-item">
                            <ul>
                                <li className="title">Politikalar</li>
                                <li>Nakliye Politikası</li>
                                <li>İptal & İade</li>
                                <li>Gizlilik Politikası</li>
                                <li>Kiralama Şart & Koşullar</li>
                                <li>Referans Şart & Koşullar</li>
                            </ul>
                        </div>
                        <div className="content-item">
                            <ul>
                                <li className="title">Yardıma mı İhtiyacınız Var?</li>
                                <li><FontAwesomeIcon icon={faPhoneAlt} />+90 123 456 7889</li>
                                <li><FontAwesomeIcon icon={faClock} />(9AM - 6PM)</li>
                                <li className="mail-text"><FontAwesomeIcon icon={faEnvelope} />uygunaliralasupport@example.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-block safe-area">
                <div className="left-block">
                    <p>© 2020 Uyguna Kirala</p>
                </div>
                <div className="right-block">
                    <div className="icon-item">
                        G
                    </div>
                    <div className="icon-item">
                        F
                    </div>
                    <div className="icon-item">
                        In
                    </div>
                </div>
            </div>
        </div>
    )
}
