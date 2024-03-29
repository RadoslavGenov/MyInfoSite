import { useState } from 'react'
import styles from './NavHeader.module.css'
import { useSetTabOnScroll } from './useSetTabOnScroll'
import { Tab } from '../../constants'

type NavHeaderProps = Readonly<{
  onLinkClick: (index: number) => void
}>

const NavHeader: React.FC<NavHeaderProps> = ({ onLinkClick }) => {
  const [active, setActive] = useState<Tab>(Tab.Home)

  const handleClick = (index: Tab) => () => {
    onLinkClick(index)
    setActive(index)
  }

  const handleSetActiveTab = (index: Tab) => {
    setActive(index)
  }

  const getStyle = (current: Tab) =>
    active === current ? styles.navLinksItemActive : styles.navLinksItem

  useSetTabOnScroll(handleSetActiveTab)

  return (
    <div className={styles.navLinks}>
      <div className={getStyle(Tab.Home)} onClick={handleClick(Tab.Home)}>
        Home
      </div>
      <div className={getStyle(Tab.About)} onClick={handleClick(Tab.About)}>
        About
      </div>
      <div
        className={getStyle(Tab.Experience)}
        onClick={handleClick(Tab.Experience)}
      >
        Experience
      </div>
    </div>
  )
}

export default NavHeader
