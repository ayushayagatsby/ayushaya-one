import React, { useState, useRef, useEffect } from "react"
import IcArrowDown from "../assets/IcArrowDown.svg"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/react"

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
  box-shadow: 0px 10px 20px #d1c2bb4d;
  transition: transform 1s, box-shadow 1s;
  &:hover {
    transform: scale(90%);
    box-shadow: 0px 2px 10px #d1c2bb4d;
    cursor: pointer;
  }
`

export default function DownScrollIcon(props) {
  const prevScrollY = useRef(0)

  const [goingDown, setGoingDown] = useState(true)

  const [scrollDown, setScrollDown] = useState(false)

  useEffect(() => {
    let viewportHeight = window.innerHeight
    if (scrollDown) {
      document
        .getElementById("layout-wrapper")
        .scrollBy({ top: viewportHeight, left: 0, behavior: "smooth" })
    }
  }, [scrollDown])

  const handleScrollDown = () => {
    if (props.click) {
      props.click()
    } else {
      setScrollDown(true)
    }
  }

  return (
    <Wrapper onClick={handleScrollDown} size={props.size} mt={props.mt}>
      <IcArrowDown
        css={css`
          width: 22%;
          height: auto;
          transform: translateY(5%);
        `}
      />
    </Wrapper>
  )
}
