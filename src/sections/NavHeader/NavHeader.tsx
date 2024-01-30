import { useCallback, useState } from 'react'
import styles from './NavHeader.module.css'
import { useSetTabOnScroll } from './useSetTabOnScroll'

type NavHeaderProps = Readonly<{
  onLinkClick: (index: number) => void
}>

export enum Tabs {
  Home = 0,
  About = 1,
  Experience = 2
}

const NavHeader: React.FC<NavHeaderProps> = ({ onLinkClick }) => {
  const [active, setActive] = useState<Tabs>(Tabs.Home)

  const handleClick = (index: Tabs) => () => {
    onLinkClick(index)
    setActive(index)
  }

  const handleSetActiveTab = useCallback(
    (index: Tabs) => {
      setActive(index)
    },
    [setActive]
  )

  useSetTabOnScroll(handleSetActiveTab)

  return (
    <div className={styles.nav}>
      <div className={styles.navLinks}>
        <div
          className={
            active === Tabs.Home
              ? styles.navLinksItemActive
              : styles.navLinksItem
          }
          onClick={handleClick(Tabs.Home)}
        >
          Home
        </div>
        <div
          className={
            active === Tabs.About
              ? styles.navLinksItemActive
              : styles.navLinksItem
          }
          onClick={handleClick(Tabs.About)}
        >
          About
        </div>
        <div
          className={
            active === Tabs.Experience
              ? styles.navLinksItemActive
              : styles.navLinksItem
          }
          onClick={handleClick(Tabs.Experience)}
        >
          Experience
        </div>
      </div>
    </div>
  )
}

export default NavHeader
