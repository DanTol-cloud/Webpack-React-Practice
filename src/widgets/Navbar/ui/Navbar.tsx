import cls from './Navbar.module.scss'
import className from 'shared/lib/ClassName'
import { AppLink, LinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  classN?: string
}

export const Navbar = ({ classN }: NavbarProps) => {
  const { t } = useTranslation()
  return (
        <div className={className(cls.Navbar, {}, [classN])}>
            <div className={cls.LinkBlock}>
                <AppLink
                    theme={LinkTheme.PRIMARY}
                    to='/'
                    classN={cls.MainLink}
                >
                    {t('links.main')}
                </AppLink>
                <AppLink
                    theme={LinkTheme.PRIMARY}
                    to='/about'
                >
                    {t('links.about')}
                </AppLink>
            </div>
        </div>
  )
}
