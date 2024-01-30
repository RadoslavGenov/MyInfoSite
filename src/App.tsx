import { useRef } from 'react'
import styles from './App.module.css'
import About from './sections/About/About'
import Home from './sections/Home/Home'
import NavHeader from './sections/NavHeader/NavHeader'
import Work from './sections/Work/Work'
import Footer from './sections/Footer/Footer'

function App() {
  const refs = useRef<Array<HTMLDivElement | null>>([])

  const handleLinkClick = (index: number) => {
    refs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.main}>
      <NavHeader onLinkClick={handleLinkClick} />
      <Home refs={refs} />
      <About refs={refs} />
      <Work refs={refs} />
      <Footer />
    </div>
  )
}

export default App
