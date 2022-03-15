import React from 'react'
import styled from "@emotion/styled"

const SideWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: -10%;
  padding: 5%;
`
export default function SideWrapperComponet({children}) {

    return (
        <SideWrapper>{children}</SideWrapper>
    )
}
