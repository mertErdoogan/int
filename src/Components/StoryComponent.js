import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMicrochip, faSign, faCouch, faDumbbell, faBookOpen, faTools, faStoreAlt, faTshirt, faFutbol } from '@fortawesome/free-solid-svg-icons';

export default function StoryComponent() {
    return (
        <div className="story-root">
            <div className="story-wrapper safe-area">
                <div className="story-container">
                    <div className="story-item">
                        <div className="circle-item d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faCar} /></div>
                        </div>
                        <div className="text-item">
                            <p>Vasıta</p>
                        </div>
                    </div>
                    <div className="story-item ">
                        <div className="circle-item t-3 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faMicrochip} /></div>
                        </div>
                        <div className="text-item">
                            <p>Elektronik</p>
                        </div>
                    </div>
                    <div className="story-item">
                        <div className="circle-item t-4 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faSign} /></div>
                        </div>
                        <div className="text-item">
                            <p>Emlak</p>
                        </div>
                    </div>
                    <div className="story-item">
                        <div className="circle-item t-5 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faCouch} /></div>
                        </div>
                        <div className="text-item">
                            <p>Mobilya</p>
                        </div>
                    </div>
                    <div className="story-item">
                        <div className="circle-item t-6 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faDumbbell} /></div>
                        </div>
                        <div className="text-item">
                            <p>Fitness</p>
                        </div>
                    </div>
                    <div className="story-item">
                        <div className="circle-item t-7 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faBookOpen} /></div>
                        </div>
                        <div className="text-item">
                            <p>Kitap</p>
                        </div>
                    </div>
                    <div className="story-item">
                        <div className="circle-item t-8 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faTools} /></div>
                        </div>
                        <div className="text-item">
                            <p>El Aletleri</p>
                        </div>
                    </div>
                    <div className="story-item">
                        <div className="circle-item t-9 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faStoreAlt} /></div>
                        </div>
                        <div className="text-item">
                            <p>Alışveriş</p>
                        </div>
                    </div>
                    <div className="story-item">
                        <div className="circle-item t-10 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faTshirt} /></div>
                        </div>
                        <div className="text-item">
                            <p>Moda</p>
                        </div>
                    </div>
                    <div className="story-item">
                        <div className="circle-item t-11 d-flex-center">
                            <div className="colored-circle d-flex-center"><FontAwesomeIcon icon={faFutbol} /></div>
                        </div>
                        <div className="text-item">
                            <p>Spor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
