import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"

const HeroSection = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            {/* TEXT */}
            <Title>
              ADA <br /> Rocks
            </Title>
            <Description>
              Welcome to Ada Rocks! 1,000 unique NFT rocks{" "}
              <span role="img" aria-label="emoji">
                🪨
              </span>{" "}
              on the Cardano blockchain.
            </Description>
            <Link to="/mint">Mint</Link>
          </TextWrapper>
          {/* IMAGE */}
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: #16161a;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: #fffffe;
`

const Description = styled(MediumText)`
  color: #94a1b2;
`
