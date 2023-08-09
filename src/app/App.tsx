import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/provider/ThemeProvider";
import className from "shared/lib/ClassName";
import {AboutPage} from "pages/about";
import {MainPage} from "pages/mainPage";
import {AppRouter} from "app/provider/router";
import {Navbar} from "widgets/Navbar";




export const App = () => {
const {theme, toggleTheme} = useTheme();

    return (
        <div className={className('app', {hovered: true, selected: false}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}
