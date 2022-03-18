import React from 'react';
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
  }

`

export default function DownScrollIcon(props) {

    return (
        <Wrapper onClick={props.click} size={props.size} mt={props.mt}><IcArrowDown css={css ` width: 22%; height:auto; transform: translateY(5%);`}/></Wrapper>
    )
}
