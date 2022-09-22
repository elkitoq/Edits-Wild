import { Navbar } from '../components/navbar'
import { HeroVertical } from '../components/hero/hero-v'
import Wave from '../components/illustration/wave-hero'
import { Feature } from '../components/feature'
import { About } from '../components/about'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroVertical />
      <Feature />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
