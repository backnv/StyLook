import React from 'react';
import {BeforeAfter} from 'react-simple-before-after'
import './slider-before-after.css';

import image1 from '../../images/11/00213-4034140133.jpg';
import image2 from '../../images/11/00232-356440021.jpg';

function SliderBeforeAfter({sliders}) {


    return (
        <div className="sliderba">
            <div className="sliderba__left">
                <h2>Наш подход к созданию образов гораздо глубже.</h2>
                <div className="hr"></div>
                <p>С помощью нашего сервиса изменения внешности на фото вы можете получить новый облик в считанные
                    минуты. Все, что вам нужно сделать, это загрузить фотографию, выбрать необходимые опции и
                    наслаждаться результатом. Вы можете делать это в любое время и в любом месте - мы работаем онлайн и
                    готовы к вашим заказам в любое время суток.</p>
            </div>
            <div className="sliderba__right">
                <BeforeAfter
                    className="sliderba-image"
                    beforeImage={image1}
                    afterImage={image2}
                />
            </div>
        </div>
    )
}

export default SliderBeforeAfter;
