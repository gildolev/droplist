import React from 'react'
import './DropItem.css';

export default function DropItem(props) {
    return (
        <p className='item'>
           {props.children}
        </p>
    )
}

