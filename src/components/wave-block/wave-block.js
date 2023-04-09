import React from "react";

import './wave-block.css';

function WaveBlock({children, color, size, wave}) {
    const style = !color ? `wave-block` : `wave-block ` + color;
    const waveStyle = () => {
        if (wave) {
            switch (wave) {
                case 1:
                    return wave1();
                case 2:
                    return wave2();
                default:
                    return wave1();
            }
        }
        return '';

    }
    return (
        <section className={style}>
            <div className="wave-top">{waveStyle()}</div>

            <div className="wave-block__container" style={size ? {maxWidth: size + 'px'} : {}}>{children}</div>

            <div className="wave-bottom">{waveStyle()}</div>
        </section>
    )
}

export default WaveBlock;

const wave1 = () => {
    return (
        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"></path>
            <path d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"></path>
            <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
        </svg>
    )
}

const wave2 = () => {
    return (
        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path>
            <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path>
            <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path>
        </svg>
    )
}
