import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import './styles/index.scss'
import { AppRouter } from './providers/router/ui/AppRouter'
import DarkIcon from 'shared/assets/icons/dark.svg'

export const App = () => (
    <div className={classNames('app')}>
        <Link to='/'>MainPage</Link>
        <Link to='/about'>AboutPage</Link>
        <AppRouter />
        <DarkIcon />
    </div>
) 