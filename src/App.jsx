import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Steps from './components/Steps.jsx'
import Roadmap from './components/Roadmap.jsx'
import Services from './components/Services.jsx'
import Industries from './components/Industries.jsx'
import Why from './components/Why.jsx'
import Proof from './components/Proof.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#book">Skip to booking form</a>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Roadmap />
        <Services />
        <Industries />
        <Why />
        <Proof />
      </main>
      <Footer />
    </>
  )
}
