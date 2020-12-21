import React, {useState} from 'react'
import ToggleBar from './ToggleBar/ToggleBar'
import Headers from './Headers'
import Topbar from './Topbar'

const MenuBar = () => {

const [isOpen, setIsOpen] = useState(false)

const [show, setShow] = useState(true)


const toggle = () =>{
    setIsOpen(!isOpen)
}

    return (
        <> 
           <Topbar />
           <ToggleBar isOpen={isOpen} toggle={toggle}  /> 
           <Headers toggle={toggle}/>
        </>
    )
}

export default MenuBar
