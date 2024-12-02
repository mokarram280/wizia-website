import './App.css';
import Control from './Components/Control';
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
    </>
  )
}

export default App;