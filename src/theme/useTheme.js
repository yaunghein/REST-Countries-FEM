import { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const saveToLSandSetTheme = theme => {
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const toggleTheme = () => {
    theme === 'light' ? saveToLSandSetTheme('dark') : saveToLSandSetTheme('light')
  }

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const preferDarkMode = matchMedia('(prefers-color-scheme: dark)').matches
      if (preferDarkMode) setTheme('dark')
    }
  }, [])

  return [theme, toggleTheme]
}

export default useTheme
