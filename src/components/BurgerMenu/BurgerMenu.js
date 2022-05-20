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
        const blogBar = document.getElementById("blog-bar");

        let vh = window.innerHeight;

        if (burgerState) {
            firstChild.style.height = `${vh}px `;
            firstChild.style.overflow = 'hidden';

            if (blogBar) {
                blogBar.style.visibility = "hidden"
            }

        } else {
            firstChild.style.height = '100vh';
            firstChild.style.overflow = 'scroll';
            if (blogBar) {
                blogBar.style.visibility = "visible"
            }
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
