import EventBox from "@/components/EventBox"
import HR from "@/components/HR"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Head from "next/head"
import EventHandle from "@/components/EventHandle"
import Banner from "@/components/Banner"

const Home = () => {
  return (
    <>
      <Head>
        <title>Harmony</title>
      </Head>
      <Layout>
        <Hero />
        <EventBox />
        <EventHandle />
        <Banner />
      </Layout>
    </>
  )
}

export default Home