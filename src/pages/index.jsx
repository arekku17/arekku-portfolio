import * as React from "react"
import Layout from "../components/Layout"
import HomeInfo from "../components/Home"
import Aboutme from "../components/Aboutme"
import { Skills } from "../components/Skills"

export default function Home() {
  return <>
    <Layout>
      <HomeInfo></HomeInfo>
      <Aboutme></Aboutme>
      <Skills></Skills>
    </Layout>
  </>
}
