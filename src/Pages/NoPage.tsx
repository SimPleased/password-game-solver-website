import { FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";
import { RouteNames } from "../assets/RouteNames";

const NotFound: FunctionalComponent = () => {
	useEffect(() => {
		setTimeout(() => {
			if (!Object.keys(RouteNames).find(key => RouteNames[key] === location.pathname))
				location.pathname = RouteNames.HOME;
		}, 5E3);
	}, []);

	return (
		<section>
			<h1>404: Not Found</h1>
			<span>
				The page <b>{window.location.href}</b> could not be found
				<br/>
				Redirecting you to home page in 5s
			</span>
		</section>
	);
}

export default NotFound;