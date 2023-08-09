import {useState} from "react";
import cls from './SideBar.module.scss'
import className from "shared/lib/ClassName"
import {AppButton} from "shared/ui/Button/AppButton";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface SideBarProps {
    classN?: string
}

export const SideBar = ({classN}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={className(cls.SideBar, {[cls.collapsed]: collapsed}, [classN])}>
            <AppButton onClick={onToggle}>TOGGLE</AppButton>
            <div className={cls.switcher}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
