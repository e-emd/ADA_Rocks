import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Ada Rocks</h1>
      <p>
        Welcome to Ada Rocks! 1,000 unique NFT rocks{" "}
        <span role="img" aria-label="rock emoji">
          🪨
        </span>{" "}
        on the Cardano blockchain.
      </p>
    </Layout>
  )
}

export default IndexPage
