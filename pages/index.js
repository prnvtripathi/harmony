import EventBox from "@/components/EventBox"
import HR from "@/components/HR"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Harmony</title>
      </Head>
      <Layout>
        <Hero />
        <EventBox />
      </Layout>
    </>
  )
}

export default Home