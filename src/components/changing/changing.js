import React from "react";

import {RxScissors} from "react-icons/rx";
import {MdOutlineColorLens} from "react-icons/md";
import {CiImageOn} from "react-icons/ci";

import image1 from '../../images/11/4.jpg';
import image2 from '../../images/11/2.jpg';
import image3 from '../../images/11/5.jpg';
import image4 from '../../images/11/6.jpg';

import './changing.css';

function Changing() {
    return <>
        <h4>Title min</h4>
        <h2 className="gradient ">title title</h2>
        <div className="changing">
            <div className="changing__box">
                <div className="changing__images">
                    <div className="changing__image"><img className="changing__img" src={image1} alt=""/></div>
                    <div className="changing__image"><img className="changing__img" src={image2} alt=""/></div>
                    <div className="changing__image"><img className="changing__img" src={image3} alt=""/></div>
                    <div className="changing__image"><img className="changing__img" src={image4} alt=""/></div>
                </div>
            </div>
            <div className="changing__box">
                <h2>Это легко чем кажется, поверьте</h2>
                <div className="hr"></div>
                <ul className="changing__list">
                    <li className="changing__item">
                        <span className="changing__item-span"><RxScissors/></span>
                        <p>Вы мечтаете о изменении своей внешности, но не хотите обращаться к стилистам и платить
                            большие деньги?
                            Тогда для вас есть прекрасное решение - изменение внешности на фото. Теперь вы можете легко
                            и быстро изменить свой образ в любой момент, не прибегая к радикальным мерам.
                            Мы сможем разнообразить Ваши локоны, добавить им объема или просто подстричь их по моде.
                        </p>
                    </li>

                    <li className="changing__item">
                        <span className="changing__item-span"><MdOutlineColorLens/></span>
                        <p>Если вы хотите изменить цвет ваших глаз или волос, то мы предлагаем услуги окрашивания волос.
                            С их помощью вы можете получить ровную стрелку на глазах, более
                            яркий цвет волос.</p>
                    </li>

                    <li className="changing__item">
                        <span className="changing__item-span"><CiImageOn/></span>
                        <p>Мы предлагаем профессиональные услуги по изменению внешности на фото. Наша команда опытных
                            специалистов использует самые современные технологии и программы для создания превосходных
                            результатов. Мы знаем, что каждый человек уникален и имеет свои особенности, поэтому мы
                            уделяем особое внимание каждому клиенту, чтобы удовлетворить все его потребности и
                            пожелания.

                        </p>
                        <i/>
                        <p>Новый фон, новая одежда, новые впечатления - все это ждет вас! Обратитесь к нам и дайте нам
                            возможность показать вам, что мы умеем делать!"</p>
                    </li>

                </ul>
            </div>
        </div>
    </>;
}

export default Changing;
