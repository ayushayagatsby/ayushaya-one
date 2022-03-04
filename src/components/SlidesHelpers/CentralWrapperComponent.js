import React from 'react'
import styled from "@emotion/styled"

const CentralWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
`
export default function CentralWrapperComponent({children}) {

    return (
        <CentralWrapper>{children}</CentralWrapper>
    )
}
