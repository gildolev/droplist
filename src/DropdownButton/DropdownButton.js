import React from 'react'
import './DropdownButton.css';



export default function DropdownButton(props) {
    const{setShow,show}=props;
    return (
        <div >
           
            <button className='button' onClick={()=>setShow(!show)}>Dropdwon button  <img src={"./icon2.jpg"} /></button>
        </div>
    )
}
