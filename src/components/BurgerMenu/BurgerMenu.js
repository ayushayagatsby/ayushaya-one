import React, {useState, useEffect} from 'react'
import './BurgerMenu.css'

export default function BurgerMenu({menuToggle, menuState}) {
    const [burgerState,
        setBurgerState] = useState(true)

    const handleBurgerState = () => {
        menuToggle();
    }

    useEffect(() => {

        const firstChild = document.getElementById("layout-wrapper");

        if (burgerState) {
            firstChild.style.height = '100vh';
            firstChild.style.overflow = 'hidden';
        } else {
            firstChild.style.height = 'auto';
            firstChild.style.overflow = 'scroll';
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
