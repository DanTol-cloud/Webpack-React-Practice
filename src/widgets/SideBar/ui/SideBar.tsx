import {useState} from "react";
import cls from './SideBar.module.scss'
import className from "shared/lib/ClassName"
import {AppButton} from "shared/ui/Button/AppButton";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";


interface SideBarProps {
    classN?: string
}

export const SideBar = ({classN}: SideBarProps) => {
    const{t} = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={className(cls.SideBar, {[cls.collapsed]: collapsed}, [classN])}>
            <AppButton onClick={onToggle}>{t('button.menu')}</AppButton>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
