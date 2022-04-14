import React from 'react'
import styled from "@emotion/styled"

const SideWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: ${props => props.p};
`
export default function SideWrapperComponet({children, p}) {

    return (
        <SideWrapper p={p}>{children}</SideWrapper>
    )
}
