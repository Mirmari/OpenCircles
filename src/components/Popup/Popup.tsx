import React from 'react';

import './Popup.css';

type defaultProps = {
    onClose: () => void;
    clients: {
        id:number, mail:string, name:string, secondName: string, type: string, company: string, country: string, subscription: string
    };
};

const Popup = ({onClose, clients}:defaultProps) => {
    return (
        <div className="popup">
            <div className="popup__inner">
                <div className="popup__header">
                    <div className="header__title">
                        EDIT %NAME%
                    </div>
                    <div className="header__subtitle">
                        unique ID - {clients.id}
                    </div>
                    <button className="popup__btn" onClick={onClose} />
                </div>
                <div className="input__block">
                    <div className="input__item item--grow-2">
                        <span className="input__title">e-mail</span>
                        <input className="popup__input" type="text" placeholder={clients.mail} />
                    </div>
                    <div className="input__item ">
                        <span className="input__title">First name</span>
                        <input className="popup__input" type="text" placeholder={clients.name} />
                    </div>
                    <div className="input__item">
                        <span className="input__title">Last Name</span>
                        <input className="popup__input" type="text" placeholder={clients.secondName} />
                    </div>
                </div>
                <div className="input__block">
                    <div className="input__item item--grow-2">
                        <span className="input__title">Country</span>
                        <input className="popup__input" type="text" placeholder={clients.country} />
                    </div>
                    <div className="input__item item--grow-2">
                        <span className="input__title">Company</span>
                        <input className="popup__input" type="text" placeholder={clients.company} />
                    </div>
                </div>
                <div className="input__block">
                    <div className="input__item">
                        <span className="input__title">Type</span>
                        <input className="popup__input input--primary_text" type="text" placeholder={clients.type} />
                        <div className="input__arrow" />
                    </div>
                    <div className="input__item">
                        <span className="input__title">level</span>
                        <input className="popup__input input--primary_text" type="text" placeholder="12" />
                        <div className="input__arrow" />
                    </div>
                    <div className="input__item">
                        <span className="input__title">validated</span>
                        <input className="popup__input input--primary_text" type="text" placeholder="Yes" />
                    </div>
                    <div className="input__item">
                        <span className="input__title">coins</span>
                        <input className="popup__input input--primary_text" type="text" placeholder="3 000" />
                    </div>
                </div>
                <div className="popup__footer">
                    <div className="subscription">
                        <div className="subscription__item">
                            Subscription type - <span className="subscription__text">99.99</span>
                        </div>
                        <div className="subscription__item">
                            Subscription date - <span className="subscription__text">11/02/2016</span>
                        </div>
                    </div>
                    <div className="footer__buttons">
                        <button className="popup_button">Reset password</button>
                        <button className="popup_button">revoke access</button>
                        <button className="popup_button button--green" >SAve</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;