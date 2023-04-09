import * as React from "react"
import Header from "../components/header";

import './index.css';
import WaveBlock from "../components/wave-block";
import Changing from "../components/changing";
import Gallery from "../components/gallery";
import SliderBeforeAfter from "../components/slider-before-after";
import Footer from "../components/footer";
import Constructor from "../components/constructor";
import Faqq from "../components/faqq";


const IndexPage = () => {
    return (
        <>


            <Header/>

            <WaveBlock wave={1} color={"silver"} size={1400}>
                <h2> Хотите полностью изменить свой облик и стать новым человеком? Тогда вам нужна услуга по изменению
                    внешности! <span className="gradient">StyLook</span> предоставляет вам такую возмодность и поможет вам создать идеальный образ.
                </h2>
            </WaveBlock>


            <WaveBlock wave={1} color={"white"} size={1400}>
                <Changing/>
            </WaveBlock>


            <WaveBlock wave={1} color={"silver"} size={1400}>
                <h2 className="gradient">Мы гарантируем полную конфиденциальность и безопасность ваших фотографий и данных. Вы можете быть
                    уверены, что ваша личность и фото будут защищены и останутся конфиденциальными.</h2>
            </WaveBlock>


            <Constructor/>


            <WaveBlock wave={1} color={""} size={1400}>
                <SliderBeforeAfter/>
            </WaveBlock>

            <WaveBlock wave={1} color={"silver"} size={1400}>
                <Gallery/>
            </WaveBlock>

            <WaveBlock wave={2} color={"silver"} size={1400}>
                <Faqq/>

            </WaveBlock>

            {/*<WaveBlock wave={1} color={""} size={600}>*/}
            {/*    <Subscribe/>*/}
            {/*</WaveBlock>*/}



            <br/><br/><br/><br/>
            <Footer/>


        </>

    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
