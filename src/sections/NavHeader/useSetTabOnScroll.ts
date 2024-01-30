import { useEffect } from 'react'
import { Tabs } from './NavHeader'

type UseSetTabOnScroll = (setActive: (index: Tabs) => void) => void

export const useSetTabOnScroll: UseSetTabOnScroll = (setActive) => {
  useEffect(() => {
    const scrollEvent = (ev: any) => {
      const top = ev.target.scrollingElement.scrollTop || 1
      // (-50px) to set active a few pixels before section is in view
      const clientHeight = ev.target.scrollingElement.clientHeight - 50

      if (top < clientHeight) {
        setActive(Tabs.Home)

        return
      }

      if (top > clientHeight && top < clientHeight * 2) {
        setActive(Tabs.About)

        return
      }

      if (top > clientHeight * 2) {
        setActive(Tabs.Experience)
      }
    }

    document.addEventListener('scroll', scrollEvent)

    return () => {
      document.removeEventListener('scroll', scrollEvent)
    }
  }, [setActive])
}
