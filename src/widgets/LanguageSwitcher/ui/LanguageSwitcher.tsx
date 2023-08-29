import cls from './LanguageSwitcher.module.scss'
import { AppButton, ThemeButton } from 'shared/ui/Button/AppButton'
import { useTranslation } from 'react-i18next'

interface LanguageSwitcherProps {
  classN?: string
}

export const LanguageSwitcher = ({ classN }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const handleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
  }

  return (
        <AppButton onClick={handleLanguage} classN={cls.LanguageSwitcher} theme={ThemeButton.CLEAR}>
            {t('button.language')}
        </AppButton>
  )
}
