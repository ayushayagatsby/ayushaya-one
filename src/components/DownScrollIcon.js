import React, {useState, useEffect, useRef} from 'react';
import IcArrowDown from "../assets/IcArrowDown.svg";
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react'

const Wrapper = styled("div")`
  width: ${props => props.size};
  height: ${props => props.size};
  margin-top: ${props => props.mt};
  max-width: 120px;
  max-height: 120px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 20px #D1C2BB4D;
  transition: transform 1s, box-shadow 1s;  
  &:hover {
    transform: scale(90%);
    box-shadow: 0px 2px 10px #D1C2BB4D;
    cursor: pointer;
  }

`

export default function DownScrollIcon(props) {

    const prevScrollY = useRef(0);

    const [goingDown,
        setGoingDown] = useState(true);

    // useEffect(() => {     const handleScroll = () => {         const
    // currentScrollY = window.scrollY;         if (prevScrollY.current >
    // currentScrollY && goingDown) {             setGoingDown(false);         } if
    // (prevScrollY.current < currentScrollY && !goingDown) { setGoingDown(true);
    //      }         prevScrollY.current = currentScrollY; console.log(goingDown,
    // currentScrollY);     }; window.addEventListener("scroll", handleScroll,
    // {passive: true});     return () => window.removeEventListener("scroll",
    // handleScroll); }, [goingDown]);

    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         let delta = event.deltaY;
    //         if (delta > 0) {
    //             console.log(delta)
    //             handleScrollDown();

    //         }
    //     };

    //     window.addEventListener("wheel", handleScroll);

    //     return () => window.removeEventListener("wheel", handleScroll);
    // }, []);

    const handleScrollDown = () => {

        props.click();

    }


return (
    <Wrapper onClick={handleScrollDown} size={props.size} mt={props.mt}><IcArrowDown css={css ` width: 22%; height:auto; transform: translateY(5%);`}/></Wrapper>
)
}