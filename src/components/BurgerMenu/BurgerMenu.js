import React, { useState } from 'react'
import './BurgerMenu.css'

export default function BurgerMenu() {
    const [burgerState, setBurgerState] = useState(false)

    const handleBurgerState = ()=> {
        setBurgerState(!burgerState);
    }

    
    
    return (
        <div id="nav-icon4" className={burgerState ? "open" : ""} onClick={handleBurgerState}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
