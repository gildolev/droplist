import React, { useState, useEffect } from 'react'
import DropdownButton from '../DropdownButton/DropdownButton'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

export default function Dropdown() {
    const [show, setShow] = useState(false);

    const handleClick = (e) => {
      if(show===true){ setShow(false)}
    }



    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }

    }, [show])

    return (
        <div>
            <DropdownButton setShow={setShow} show={show} />
            {show && <DropdownMenu />}
        </div>
    )
}
