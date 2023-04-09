import React from "react";
import {TbHandClick} from "react-icons/tb";

import './touch-image.css';

function TouchImage({item}) {




    return (
        <div className="touch-image">
            <div className="touch-image__element">
                <img className="touch-image__element-image-b"
                     src={item+1}
                     alt=""/>
                <img className="touch-image__element-image-a"
                     src={item}
                     alt=""/>
                <div className="touch-image__overlay"></div>
                <div className="touch-image__clickme"><TbHandClick/>Touch me</div>
            </div>
        </div>

    );

}

export default TouchImage;
