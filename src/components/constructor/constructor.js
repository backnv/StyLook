import React, {Component, useRef, useState} from "react";

import './constructor.css';
import HandlerTelegram from "./handlerTelegram";
import {AiOutlineUserAdd, FaCcAmazonPay} from "react-icons/all";
import ConstructorHash from "./constructor-hash";
import Buttons from "../buttons";


function Constructor() {

    const countRef = useRef(0);
    ;

    const formRef = useRef();
    const [selectedImage, setSelectedImage] = useState([]);

    const textAreaRef = useRef('');
    const [textAreaState, setTextAreaState] = useState('');


    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };


    let telegram_bot_id = "bot5934482844:AAGU26cJ7_w5jU-axlGZvhurlG_jy9ZGsS4";
    let _target_telegram_channel = "840112292";

    const addGalleryPhoto = async (e) => {

        e.preventDefault();

        new HandlerTelegram().send(formRef.current, selectedImage, textAreaState);


    };

    function createNewPhoto(file) {
        const el = {id: countRef.current, filePhoto: file}
        countRef.current = countRef.current + 1;
        return el;


    }

    const handleDelete = (id) => {
        const newArr = selectedImage.filter(color => color.id !== id);
        console.log(newArr)
        setSelectedImage(newArr);

    }

    const viewImages = selectedImage.map((x, idx) => {
        return <img key={idx} className="constructor__image"
                    onClick={() => handleDelete(x.id)}
                    alt=""
                    src={URL.createObjectURL(x.filePhoto)}
        />

    })

    const onChange = (e) => {
        let arr = [];
        for (let i = 0; i < e.target.files.length; i++) {

            if (selectedImage.length + arr.length >=5){break}

            arr.push(createNewPhoto(e.target.files[i]));

        }
        setSelectedImage(prev => [...prev, ...arr])
    }


    const handleTextArea = (text) => {
        let str = text + ' , '+ textAreaRef.current;
        setTextAreaState(str);

    }

    const textAreaChange = (e) => {
        textAreaRef.current = e.target.value;
        setTextAreaState(e.target.value);
    }

    const  moveCaretAtEnd = (e)=> {
        let temp_value = e.target.value
        e.target.value = ''
        e.target.value = temp_value
    }

    return <div className="constructor">


        <div className="constructor__container">
            <div className="constructor__grid">
                <div className="constructor__images-block">
                    <div className="constructor__images-main">
                        {selectedImage.length < 1 && (
                            <div className="constructor__images-main-pikcha">
                                <input
                                    id='file'
                                    className="constructor__images-block-fileload"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                    name="my_file[]"
                                    onChange={onChange}
                                    multiple
                                />
                                <label htmlFor="file"
                                       className="constructor__images-main-photo-icon"><AiOutlineUserAdd/></label>
                            </div>
                        )}

                        {/*показать главное фото если оно есть*/}
                        {selectedImage.length >= 1 && (
                            <div>
                                <img className="constructor__image-main"
                                     onClick={() => handleDelete(selectedImage[0].id)}
                                     alt=""
                                     src={URL.createObjectURL(selectedImage[0].filePhoto)}
                                />
                            </div>

                        )}
                    </div>

                    {/*показать остальные фотки*/}
                    <div className="constructor__image-all">
                        {viewImages}

                        {selectedImage.length >  0 && (
                            <div className="constructor__images-main-pikcha1">
                                <input
                                    id='file1'
                                    className="constructor__images-block-fileload"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                    name="my_file[]"
                                    onChange={onChange}
                                    multiple
                                />
                                <label htmlFor="file1"
                                       className="constructor__images-main-photo-icon-small"><AiOutlineUserAdd/></label>
                            </div>
                        )}

                    </div>
                    <div className="constructor__images-block-all"></div>
                </div>
            </div>
            <div className="constructor__grid">


                <ConstructorHash textArea={handleTextArea}
                                 hash={["длинные волосы", "Короткие", "Фиолетовые", "Orange", "Усы брет пита", "Старость", "Широкая улыбка", "Фиолетовые", "Orange", "Усы брет пита", "Старость", "Широкая улыбка", "One", "One"]}/>


                <br/>


                <form ref={formRef} className="constructor__form" onSubmit={addGalleryPhoto} method="POST"
                      encType="multipart/form-data">
                    <div className="footer__form-group">
                        <textarea
                            onChange={textAreaChange}
                            onFocus={moveCaretAtEnd}
                            name="textarea"
                            value={textAreaState}
                            className="footer__form-input constructor__form-textarea"
                            id="constructor__form"
                            rows="6"></textarea>

                        <label htmlFor="constructor__form" className="footer__form-label constructor__form-label">Напишите
                            нам чтобы вы хотели изменить</label>
                    </div>
                    <Buttons click={(e)=>addGalleryPhoto(e)} text={"отправить"} icon={<FaCcAmazonPay/>}/>
                    <button onSubmit={addGalleryPhoto} type="submit">Отправить</button>
                </form>


            </div>
        </div>


    </div>
        ;
}

export default Constructor;
