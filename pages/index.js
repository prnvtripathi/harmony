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
      </Layout>
    </>
  )
}

export default Home