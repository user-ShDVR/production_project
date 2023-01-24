import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightTheme from "shared/assets/icons/theme-light.svg"
import DarkTheme from "shared/assets/icons/theme-dark.svg"
import { Button, ThemeButton } from 'shared/ui/Button/Button';
interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const {theme, toggleTheme} = useTheme();
    return (
        <Button 
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])} 
        onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme/> }
        </Button>
 );
}