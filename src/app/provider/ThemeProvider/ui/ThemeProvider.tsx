import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'
import { type FC, useMemo, useState } from 'react'

const themeKey = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(themeKey)

  const value = useMemo(() => {
    return {
      theme,
      setTheme
    }
  }, [theme])

  return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider
