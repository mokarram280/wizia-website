import './App.css';
import Allocate from './Components/Allocate';
import Control from './Components/Control';
import Embrace from './Components/Embrace';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavbarArea from './Components/NavbarArea';
import PreferedEmail from './Components/PreferedEmail';
import SilderArea from './Components/SilderArea';
import Trusted from './Components/Trusted';

function App() {

  return (
    <>
      <NavbarArea />
      <Hero />
      <Trusted />
      <Control />
      <PreferedEmail />
      <SilderArea />
      <Allocate />
      <Embrace />
      <Footer />
    </>
  )
}

export default App;