import React, {useState} from "react";
import './menu.css'
import Logo from "../logo";
import Buttons from "../buttons";
import {FaInstagram, FaTelegramPlane} from "react-icons/fa";
import {SlSocialVkontakte} from "react-icons/sl";
import {MdPhotoFilter} from "react-icons/md";

function Menu() {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className={menu ? ' menu active' : 'menu'}>
            <div onClick={()=>handleMenu()}  className="menu__overlay"></div>
            <div className="menu__container">

                <div onClick={()=>handleMenu()} className="menu-icon">
                    <input className="menu-icon__cheeckbox" type="checkbox"/>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <Logo/>
                <nav className="menu__nav">
                    <ul className="menu__list">
                        <li className="menu__list-item">Home</li>
                        <li className="menu__list-item">Gallery</li>
                        <li className="menu__list-item">Price</li>
                        <li className="menu__list-item">About</li>
                    </ul>
                    <ul className="menu__social-list">
                        <li className="menu__social-item"><FaTelegramPlane/></li>
                        <li className="menu__social-item"><FaInstagram/></li>
                        <li className="menu__social-item"><SlSocialVkontakte/></li>
                    </ul>
                </nav>
                <Buttons click={handleMenu} text={"upload"} icon={<MdPhotoFilter/>}/>
            </div>
        </div>
    )
}

export default Menu;
