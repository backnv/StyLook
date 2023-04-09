import React, {useEffect, useRef, useState} from "react";
import './constructor.css';


const ConstructorHash =({hash, textArea})=>{

    const [state, setState] = useState([]);
    const [select, setSelect] = useState('');

    const textAreaRef = useRef();



    let count = 0;

    useEffect(() => {
        createArray();
    }, []);

    async function createArray (){
        const arr = await hash.map(x=>{
            return  createElement(x);
        })
        setState(arr);
    }

    function createElement (name){
        const ar = {id: count, name: name, selected: false};
        count++;
        return ar;
    }


    const handlerClick = (e, idx)=>{
        e.preventDefault();

        let ids = [...state];
        let index = ids.findIndex(el => el.id === idx);
        ids[index].selected = !ids[index].selected;
        setState(ids);

        const x = state.filter(x=>x.selected).map(x=>x.name);

        textAreaRef.current = x.join(', ');


        textArea(textAreaRef.current);






    }

    const arr = state.map((x,idx)=>{
                return <li key={idx} className="constructor__element">
                    <a onClick={e=>handlerClick(e, idx)}
                       href="#"
                       className={x.selected ? 'constructor__element-link active' : 'constructor__element-link'}>{x.name}</a>
                </li>

        })
    return (
        <ul className="constructor__elements">
                {arr}
        </ul>
    )
}

export default ConstructorHash;