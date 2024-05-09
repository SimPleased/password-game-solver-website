import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import NotFound from './Pages/NoPage';
import './style.css';
import { FunctionalComponent } from 'preact';
import { RouteNames } from './assets/RouteNames';
import VideoSearch from './Pages/VideoSearch';
import ChessSolver from './Pages/ChessSolver';
import CheckInput from './Pages/CheckInput';
import FindCountry from './Pages/FindCountry';

export const App: FunctionalComponent = () => {
	return (
		<LocationProvider>
			<NavigationBar />
			<main>
				<Router>
					<Route path={RouteNames.HOME} component={Home} />
					<Route path={RouteNames.SEARCH_VIDEO} component={VideoSearch} />
					<Route path={RouteNames.SOLVE_CHESS} component={ChessSolver} />
					<Route path={RouteNames.CHECK_INPUT} component={CheckInput} />
					<Route path={RouteNames.FIND_COUNTY} component={FindCountry} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export const prerender = async (data) => {
	return await ssr(<App {...data} />);
}
