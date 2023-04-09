import React from "react";
import './subscribe.css';
import {RiMailSendFill} from "react-icons/ri";

function Subscribe() {
    return <>
        <h2 className="text-center">подпишись на нас чтобы знать об акциях</h2>
        <p className="text-center">Мы не будем надоедать = )</p>
        <form  className="subscribe">
            <input className="subscribe__email" type="text" name="email" placeholder="Введите Ваш емайл"/>
            <button className="subscribe__button"><RiMailSendFill/></button>
        </form>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A debitis dignissimos error
            fugit ipsum iure nihil obcaecati, porro quisquam reiciendis.</p>
    </>;
}

export default Subscribe;
