import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/provider/ThemeProvider";
import className from "shared/lib/ClassName";
import {AboutPage} from "pages/about";
import {MainPage} from "pages/mainPage";
import {AppRouter} from "app/provider/router";




export const App = () => {
const {theme, toggleTheme} = useTheme();

    return (
        <div className={className('app', {hovered: true, selected: false}, [theme])}>
            <button onClick={toggleTheme} >Toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <AppRouter />
        </div>
    )
}