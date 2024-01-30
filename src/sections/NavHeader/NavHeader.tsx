import { useState } from 'react'
import styles from './NavHeader.module.css'

const NavHeader = ({ onLinkClick }: any) => {
  const [active, setActive] = useState(0)

  const handleClick = (index: number) => () => {
    onLinkClick(index)
    setActive(index)
  }

  return (
    <div className={styles.nav}>
      <div className={styles.navLinks}>
        <div
          className={
            active === 0 ? styles.navLinksItemActive : styles.navLinksItem
          }
          onClick={handleClick(0)}
        >
          Home
        </div>
        <div
          className={
            active === 1 ? styles.navLinksItemActive : styles.navLinksItem
          }
          onClick={handleClick(1)}
        >
          About
        </div>
        <div
          className={
            active === 2 ? styles.navLinksItemActive : styles.navLinksItem
          }
          onClick={handleClick(2)}
        >
          Experience
        </div>
      </div>
    </div>
  )
}

export default NavHeader
