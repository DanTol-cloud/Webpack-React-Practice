import cls from './LanguageSwitcher.module.scss'
import {AppButton, ThemeButton} from "shared/ui/Button/AppButton";
import {useTranslation} from "react-i18next";
import i18n from "shared/config/i18n/i18n";


interface LanguageSwitcherProps {
    classN?: string
}

export const LanguageSwitcher = ({classN}: LanguageSwitcherProps) => {
    const {t} = useTranslation()

    const handleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
    }

    return (
        <AppButton onClick={handleLanguage} classN={cls.LanguageSwitcher} theme={ThemeButton.CLEAR}>
            {t('button.language')}
        </AppButton>
    )
}
