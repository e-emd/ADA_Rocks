import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

export default function MIntButton(props) {
  const { title, subtitle } = props

  return (
    <Link to="/page-2">
      <Wrapper>
        <Title>{title || "dd:hh:mm:ss"}</Title>
        <Subtitle>{subtitle || "minting starts soon ..."}</Subtitle>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: ${themes.dark.highlight};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(1, 1, 1, 0.1),
    inset 0px 0px 0px 0.5px rgba(1, 1, 1, 0.5);
  border-radius: 20px;
  border: 3px solid ${themes.dark.stroke};
`

const Title = styled(Caption2)`
  color: ${themes.dark.text1};
`

const Subtitle = styled(SmallText)`
  color: ${themes.dark.text1};
  opacity: 0.7;
`
