import React, {useRef, useEffect} from "react";
import './header.css';

import image1 from '../../images/header/1.png';
import image2 from '../../images/header/2.png';
import image3 from '../../images/header/3.png';
import {SiSpreadshirt} from "react-icons/si";

function Header() {

    let count = 1;
    const imageRef = useRef();

    useEffect(() => {
        setInterval(()=>{
            for (let i = 0; i < imageRef.current.children.length; i++) {
                imageRef.current.children[i].style.opacity = 0;

            }
            imageRef.current.children[count].style.opacity = 1;
            if (count + 1 >= imageRef.current.children.length) {
                count = 0
            } else {
                count += 1
            }
        },4000)

    }, []);


    return (
        <header className="header">


            <span className="header__span-top"></span>
            <span className="header__span-bottom"></span>
            <span className="header__span-logo">StyLook</span>
            <div className="header__container">
                <div className="header__wrap-text">
                    <h2 className="header__title">Одно фото</h2>
                    <h2 className="header__title">Разный стиль</h2>
                    <p className="header__text"> Начните экспериментировать с вашим стилем уже сегодня и создавайте
                        десятки различных образов для любых случаев!</p>
                </div>
                <div className="header__buttons">
                    <button className="header__button-read">
                        <span>Узнать подробнее</span><i><SiSpreadshirt/></i></button>

                    <div className="single-scroll-down-animation animation2">
                        <div className="scroll-down2"></div>
                    </div>

                </div>
                <div ref={imageRef} className="header__image">
                    <img src={image2} style={{opacity: 1}} alt=""/>
                    <img src={image1} style={{opacity: 0}} alt=""/>
                    <img src={image3} style={{opacity: 0}} alt=""/>
                </div>
            </div>


            <div className="wave-bottom">
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
                     preserveAspectRatio="none">
                    <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path>
                    <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path>
                    <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path>
                </svg>
            </div>
        </header>
    );
}

export default Header;
