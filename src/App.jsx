import './index.css'
import Header from './components/Header';
import Hero from './components/Hero';
import { Footer } from './components/Footer';


function App() {

  return (
    <div className='flex flex-col w-full bg-[#F9F9F9] h-full '>
      <Header />
      <Hero />
      <Footer />

    </div>
  )
}

export default App
