import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rhonel Edrian Mercado | Portfolio</title>
        <meta name="description" content="Rhonel's Developer Portfolio" />
      </Head>
      <main className="bg-white text-gray-900 scroll-smooth">
        <Navbar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </>
  )
}
