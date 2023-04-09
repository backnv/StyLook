import React, {Component} from "react";


import Faq from "react-faq-component";

const data = {
    title: "FAQ (ЧТО НУЖНО ЗНАТЬ)",
    rows: [
        {
            title: <h3>Сколько фото Я получу,</h3>,
            content: <p> `Все зависит от сложности запроса, и качества фотографий, в среднем 20-50 фотографий </p>,
        },
        {
            title: <h3>Как быстро обрабатываются фото</h3>,
            content: <p>Все зависит от загруденности сервера, от 20минут до нескольки часов</p>,
        },
        {
            title: <h3> Требования к фото </h3>,
            content: <p>Вы можете загрухать любые фотографии, но если вы хотите изменить прическу, то лучше бы это была
                фото до пояса.
                В галереи вы можете увидеть подобные работы</p>,
        },
        {
            title: <h3>"18+"</h3>,
            content: <p>Мы не создаем фотографии интимного характера, но подчеркнуть денственность всегда готовы</p>,
        },
        {
            title: <h3></h3>,
            content: <p></p>,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "#FF1054",
    rowTitleColor: "#2f333a",
    rowContentColor: '#717171',
    arrowColor: "#FF1054",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

class Faqq extends Component {
    render() {
        return (
            <div>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        )
    }
}

export default Faqq;
