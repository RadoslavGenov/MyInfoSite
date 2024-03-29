import { SectionProps } from '../../types'
import { Tab } from '../../constants'
import styles from './Home.module.css'
import me from './memoji.png'

const Home: React.FC<SectionProps> = ({ refs }) => {
  return (
    <div ref={(el) => (refs.current[Tab.Home] = el)} className={styles.title}>
      <img width={200} height={200} src={me} alt="me-sticker" />
      <div className={styles.rowOne}>Hello, I'm Rado!</div>
      <div className={styles.rowTwo}>A Passionate Fullstack Developer</div>
    </div>
  )
}

export default Home
