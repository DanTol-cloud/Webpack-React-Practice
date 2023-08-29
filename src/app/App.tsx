import './styles/index.scss'
import { useTheme } from 'app/provider/ThemeProvider'
import className from 'shared/lib/ClassName'
import { AppRouter } from 'app/provider/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'

export const App = () => {
  const { theme } = useTheme()

  return (

        <div className={className('app', { hovered: true, selected: false }, [theme])}>

                <Navbar />
                <div className='wrap-page'>
                    <SideBar />
                    <AppRouter />
                </div>

        </div>

  )
}
