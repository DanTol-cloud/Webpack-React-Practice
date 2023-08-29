import cls from './ThemeSwitcher.module.scss'
import className from 'shared/lib/ClassName'
import { Theme, useTheme } from 'app/provider/ThemeProvider'
import ThemeLight from 'shared/assets/icons/theme-light.svg'
import ThemeDark from 'shared/assets/icons/theme-dark.svg'
import { AppButton, ThemeButton } from 'shared/ui/Button/AppButton'

interface ThemeSwitcherProps {
  classN?: string
}

export const ThemeSwitcher = ({ classN }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
        <AppButton theme={ThemeButton.CLEAR} onClick={toggleTheme} classN={className(cls.ThemeSwitcher, {}, [classN])}>
            {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
        </AppButton>
  )
}
