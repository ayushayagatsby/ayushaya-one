import React from 'react';
import IcShoot from "../assets/IcShoot.svg";
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import {useBreakpoint} from 'gatsby-plugin-breakpoints';


const Wrapper = styled("button")`
  width: ${props => props.size};
  height: ${props => props.size};
  margin-top: ${props => props.mt};
  margin-bottom: 10%;
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
    background: white;
  }

`

export default function SubmitButton(props) {
  const breakpoints = useBreakpoint();
    return (
        <Wrapper {...props} size={breakpoints.sm? "20vw" : "6vw"} mt={breakpoints.sm ? "10%" : "5%"} type="submit"><IcShoot css={css ` width: 50%; height:auto; transform: translateY(5%) translateX(-5%)`}/></Wrapper>
    )
}
