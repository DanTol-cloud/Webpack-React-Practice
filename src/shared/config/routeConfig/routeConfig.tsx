import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/mainPage";
import About from "pages/about/ui/about";


export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRouts, string> = {
    [AppRouts.MAIN]: '/',
    [AppRouts.ABOUT]: '/about',
}

export const RouteConfig: Record<AppRouts, RouteProps> = {
    [AppRouts.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRouts.ABOUT]: {
        path: RoutePath.about,
        element: <About />
    }
}
