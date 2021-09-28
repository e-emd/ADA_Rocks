import React from "react"
import { Link } from "gatsby"

const HeroSection = () => {
  return (
    <>
      <h1>Ada Rocks</h1>
      <p>
        Welcome to Ada Rocks! 1,000 unique NFT rocks{" "}
        <span role="img" aria-label="rock emoji">
          🪨
        </span>{" "}
        on the Cardano blockchain.
      </p>
      <Link to="/mint">Mint</Link>
    </>
  )
}

export default HeroSection
