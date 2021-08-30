import React from 'react'
import './DropdownMenu.css';
import DropItem from '../DropItem/DropItem';
const items = ['Action', 'Another action', 'Something els'];


export default function DropdownMenu() {
    return (
        <div className="select">
            <DropItem/>
            {items.map((item, index) => (
                <DropItem key={index}>{item}</DropItem>
            ))
            }

        </div>
    )
}
