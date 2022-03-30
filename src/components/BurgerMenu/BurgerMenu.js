import React, {useState, useEffect} from 'react'
import './BurgerMenu.css'

export default function BurgerMenu({menuToggle, menuState}) {
    const [burgerState,
        setBurgerState] = useState(true)

    const handleBurgerState = () => {
        menuToggle();
    }

    useEffect(() => {

        if (burgerState) {
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = 'auto';
            document.body.style.overflow = 'scroll';
        }
    }, [burgerState]);

    useEffect(() => {
        setBurgerState(!burgerState);

    }, [menuState]);

    return (
        <div
            id="nav-icon4"
            className={burgerState
            ? "open"
            : ""}
            onClick={handleBurgerState}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
