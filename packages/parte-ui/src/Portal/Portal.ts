import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect'

// Based on https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/Portal/Portal.tsx

type Props = {
  children: React.ReactNode
}
export const Portal = ({ children }: Props): React.ReactPortal | null => {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>()

  useIsomorphicLayoutEffect(() => {
    setMounted(true)

    ref.current = document.createElement('div')
    ref.current.setAttribute('parte-portal-container', '')

    document.body.appendChild(ref.current)

    return () => {
      if (ref.current) document.body.removeChild(ref.current)
    }
  }, [])

  if (!mounted || !ref.current) {
    return null
  }

  return createPortal(children, ref.current)
}
