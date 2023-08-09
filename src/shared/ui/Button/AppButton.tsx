import {ButtonHTMLAttributes, FC} from "react";
import cls from './AppButton.module.scss'
import className from "shared/lib/ClassName"

export enum ThemeButton {
    CLEAR = 'clear'
}


interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    classN?: string
    theme?: ThemeButton
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        classN,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button className={className(cls.AppButton, {}, [classN, cls[theme]])}
                {...otherProps}
        >
            {children}
        </button>
    )
}

