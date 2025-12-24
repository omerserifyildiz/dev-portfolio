'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div style={{ width: 60, height: 30, background: '#e5e7eb', borderRadius: 999 }} />

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Theme"
      className={`toggle-track ${isDark ? 'dark-mode' : 'light-mode'}`}
    >
      <div className="clouds-wrapper" style={{ opacity: isDark ? 0 : 1 }}>
        <div className="cloud-circle c-back cb-1"></div>
        <div className="cloud-circle c-back cb-2"></div>
        <div className="cloud-circle c-1"></div>
        <div className="cloud-circle c-2"></div>
        <div className="cloud-circle c-3"></div>
      </div>

      <div className="stars-wrapper" style={{ opacity: isDark ? 1 : 0 }}>
        <div className="star-tiny st-1"></div>
        <div className="star-tiny st-2"></div>
        <div className="star-tiny st-3"></div>
        <div className="star-tiny st-4"></div>
        <div className="star-tiny st-5"></div>
      </div>

      <div className="toggle-knob">
        <div className="craters-wrapper">
          <div className="crater-mark cm-1"></div>
          <div className="crater-mark cm-2"></div>
          <div className="crater-mark cm-3"></div>
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle