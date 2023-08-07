import {Counter} from "./components";
import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import About from "./components/pages/about/about";
import Main from "./components/pages/mainPage/mainPage";
import {Suspense, useContext, useState} from "react";
import {AboutAsync} from "./components/pages/about/about.async";
import {MainAsync} from "./components/pages/mainPage/main.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import useTheme from "./theme/UseTheme";
import className from "./helper/ClassName";



export const App = () => {
const {theme, toggleTheme} = useTheme();

    return (
        <div className={className('app', {hovered: true, selected: false}, [theme])}>
            <button onClick={toggleTheme} >Toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path='/about' element={<AboutAsync />}/>
                    <Route path='/' element={<MainAsync />}/>
                </ Routes>
            </Suspense>

        </div>
    )
}
