import { FunctionalComponent } from 'preact';
import { useLocation } from 'preact-iso';
import { RouteNames } from '../assets/RouteNames';
import './Styles/NavigationBar.css';

const NavigationBar: FunctionalComponent = () => {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href={RouteNames.HOME} class={url === RouteNames.HOME && 'active'}>
					Home
				</a>
				<a href={RouteNames.SEARCH_VIDEO} class={url === RouteNames.SEARCH_VIDEO && 'active'}>
					Search Video
				</a>
				<a href={RouteNames.SOLVE_CHESS} class={url === RouteNames.SOLVE_CHESS && 'active'}>
					Chess Solver
				</a>
				<a href={RouteNames.CHECK_PASSWORD} class={url === RouteNames.CHECK_PASSWORD && 'active'}>
					Check Password
				</a>
				<a href={RouteNames.FIND_COUNTY} class={url === RouteNames.FIND_COUNTY && 'active'}>
					Find Country
				</a>
				<a href={RouteNames.FORMAT_TEXT} class={url === RouteNames.FORMAT_TEXT && 'active'}>
					Format Text
				</a>
			</nav>
		</header>
	);
}

export default NavigationBar;