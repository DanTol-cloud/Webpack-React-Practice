import cls from './Navbar.module.scss'
import className from "shared/lib/ClassName"
import {AppLink, LinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface NavbarProps {
    classN?: string
}

export const Navbar = ({classN}: NavbarProps) => {
    return (
        <div className={className(cls.Navbar, {}, [classN])}>
            <ThemeSwitcher />
            <div className={cls.LinkBlock}>
                <AppLink
                    theme={LinkTheme.PRIMARY}
                    to='/'
                    classN={cls.MainLink}
                >
                    Main
                </AppLink>
                <AppLink
                    theme={LinkTheme.PRIMARY}
                    to='/about'
                >
                    About
                </AppLink>
            </div>
        </div>
    )
}

