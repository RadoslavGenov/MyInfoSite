import { useCallback, useState } from 'react'
import styles from './NavHeader.module.css'
import { useSetTabOnScroll } from './useSetTabOnScroll'

type NavHeaderProps = Readonly<{
  onLinkClick: (index: number) => void
}>

export enum Tab {
  Home = 0,
  About = 1,
  Experience = 2
}

const NavHeader: React.FC<NavHeaderProps> = ({ onLinkClick }) => {
  const [active, setActive] = useState<Tab>(Tab.Home)

  const handleClick = (index: Tab) => () => {
    onLinkClick(index)
    setActive(index)
  }

  const handleSetActiveTab = useCallback(
    (index: Tab) => {
      setActive(index)
    },
    [setActive]
  )

  const getStyle = (current: Tab) =>
    active === current ? styles.navLinksItemActive : styles.navLinksItem

  useSetTabOnScroll(handleSetActiveTab)

  return (
    <div className={styles.nav}>
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
    </div>
  )
}

export default NavHeader
