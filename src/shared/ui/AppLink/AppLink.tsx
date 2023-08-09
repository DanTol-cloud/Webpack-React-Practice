import cls from './AppLink.module.scss'
import className from "shared/lib/ClassName"
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";


export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    classN?: string,
    theme?: LinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {children, to, classN, theme = LinkTheme.PRIMARY} = props

    return (
        <Link to={to} className={className(cls.AppLink, {}, [classN, cls[theme]])}>
            {children}
        </Link>
    )
}
