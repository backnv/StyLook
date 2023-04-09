import React, {useEffect, useState} from "react";
import './gallery.css';
import TouchImage from "../touch-image";
import Buttons from "../buttons";
import {HiOutlineDownload} from "react-icons/hi";

function Gallery() {

    const count = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    const _url = "https://source.unsplash.com/random/";

    const maxElement = 20;
    let addElementCount = 10;

    const [items, setItems] = useState([]);

    useEffect(() => {
    }, [])

    const loadElement = () => {
        addElementCount+=items.length;
        setItems(count.filter((x, idx) => idx < addElementCount).map(x => x));
    }

    const arr = items.map((x, idx) => {
        return <div className="grid" key={idx}><TouchImage item={`${_url + idx}`}/></div>
    })

    return (
        <div className="masonry">
            <h4 className="text-center">Галерея</h4>
            <h2 className="gradient text-center">Загрузить примеры работ</h2>
            <div className="masonry__wrap">
                {arr}
            </div>
            <br/>
            <br/>
            {items.length>maxElement ? '' : <Buttons click={loadElement} center={true} text={items.length==0? "Load..." : "Add Photo"} icon={<HiOutlineDownload/>}/>}
        </div>
    );
}

export default Gallery;
