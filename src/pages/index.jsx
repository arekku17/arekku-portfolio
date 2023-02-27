import * as React from "react"
import Layout from "../components/Layout"
import HomeInfo from "../components/Home"
import Aboutme from "../components/Aboutme"
import { Skills } from "../components/Skills"
import Qualification from "../components/Qualification"
import Portfolio from "../components/Portfolio"
import { useState } from "react"

export default function Home() {

  const [intro, setIntro] = useState(true);

  return <>
    {intro ? 
    <Intro></Intro>
    :
    <Layout>
      <HomeInfo></HomeInfo>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Qualification></Qualification>
      <Portfolio></Portfolio>
    </Layout>
    }
    
  </>
}
