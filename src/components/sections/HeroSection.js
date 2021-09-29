import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

const HeroSection = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            {/* TEXT */}
            <img
              src="/images/logos/adaRockLogo1.png"
              alt="logo"
              style={{
                borderRadius: "49%",
                height: 75,
                width: 75,
              }}
            />
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
  background: ${themes.dark.backgroundColor};
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
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)`
  color: ${themes.dark.text3};
`
