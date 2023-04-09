import React from "react";
import './footer.css';
import Logo from "../logo";
import {FaInstagram, FaTelegramPlane} from "react-icons/fa";
import {SlSocialVkontakte} from "react-icons/sl";
import {RiMailSendLine} from "react-icons/ri";

function Footer() {




    return <div className="footer">
        <div className="footer__container">
            <div className="footer__grid">
                <div className="footer__logo">
                    <Logo/>
                    <br/>
                    <br/>
                    <p>Есть ли у Вас интересные идеи для нас?.</p>
                    <br/>
                    <p>Давайте Вместе сделаем наш сервис более продвинутым</p>
                </div>
                <div className="footer__connection">
                    <div className="footer__social">
                        <ul className="footer__social-list">
                            <li className="footer__social-list-item"><FaTelegramPlane/></li>
                            <li className="footer__social-list-item"><FaInstagram/></li>
                            <li className="footer__social-list-item"><SlSocialVkontakte/></li>
                        </ul>
                    </div>
                    <form action="" className="footer__form">
                        <div className="footer__form-grid">
                            <div className="footer__form-group">
                                <input type="input" className="footer__form-input" placeholder="Name" name="name" id='name'
                                       required/>
                                <label htmlFor="name" className="footer__form-label">Введите Ваше имя</label>
                            </div>

                            <div className="footer__form-group">
                                <input type="input" className="footer__form-input" placeholder="phone" name="phone" id='phone'
                                       required/>
                                <label htmlFor="phone" className="footer__form-label">Введите Ваш телефон</label>
                            </div>

                        </div>
                        <br/>
                        <div className="footer__form-group">
                            <textarea  name="textarea" className="footer__form-input" id="textarea"  rows="6"></textarea>

                            <label htmlFor="textarea" className="footer__form-label">Расскажите нам что нибудь о своих идеях =)</label>
                        </div>
                        <br/>
                        <button className="header__button-read footer__submit">
                            <span>Отправить</span><i><RiMailSendLine/></i></button>

                    </form>
                </div>
            </div>
        </div>
    </div>;
}

export default Footer;
