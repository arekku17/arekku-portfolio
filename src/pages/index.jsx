import * as React from "react"
import Layout from "../components/Layout"
import HomeInfo from "../components/Home"
import Aboutme from "../components/Aboutme"
import { Skills } from "../components/Skills"
import Qualification from "../components/Qualification"
import Portfolio from "../components/Portfolio"
import { useState } from "react"
import Intro from "../components/Intro"
import { useEffect } from "react"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Contactme from "../components/Contactme"
import { Helmet } from 'react-helmet';



export default function Home() {

  const [intro, setIntro] = useState(true);
  const [parent] = useAutoAnimate()

  useEffect(() => {
    setIntro(true);
    setTimeout(() => {
      setIntro(false);
    }, 3500);
  },[])

  return <div ref={parent} style={{position: "absolute"}}>
    <Helmet>
        <title>Arekku Portfolio</title>
    </Helmet>
    {intro ? 
    <Intro></Intro>
    :
    <Layout>
      <HomeInfo></HomeInfo>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Qualification></Qualification>
      <Portfolio></Portfolio>
      <Contactme></Contactme>
    </Layout>
    }
    
  </div>
}
