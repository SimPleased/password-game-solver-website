import { FunctionalComponent } from 'preact';
import icon from '../assets/icon128.png';
import './Styles/Home.css';
import { RouteNames } from '../assets/RouteNames';

const Home: FunctionalComponent = () => {
	return (
		<div className="home">
			<a className='logo' href="https://neal.fun/password-game/" target="_blank">
				<img src={icon} alt="Preact logo" height="160" width="160" />
			</a>

			<h1>Password Game Solver</h1>

			<span>
				This is the website version of my <a href='https://github.com/SimPleased/Password-Game-Solver/releases/' target='_blank'>extension</a>.
			</span>

			<section>
				<Resource
					title="Video Searcher"
					description="Need a video with a desired duration, this will find a video just for you"
					href={RouteNames.SEARCH_VIDEO}
				/>
				<Resource
					title="Chess Solver"
					description="If your having trouble with finding the chess solution this has you covered"
					href={RouteNames.SOLVE_CHESS}
				/>
				<Resource
					title="Input Validator"
					description="This will find all the rules that you are failing"
					href={RouteNames.CHECK_PASSWORD}
				/>
				<Resource
					title="Find Country"
					description="Having trouble finding the country location, heres a tool to help"
					href={RouteNames.FIND_COUNTY}
				/>
				<Resource
					title="Find Country"
					description="Having trouble finding the country location, heres a tool to help"
					href={RouteNames.FIND_COUNTY}
				/>
			</section>
		</div>
	);
}

interface ResourceProps {
	href: string,
	title: string,
	description: string
}

const Resource: FunctionalComponent<ResourceProps> = (props) => {
	return (
		<a href={props.href} className="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

export default Home;