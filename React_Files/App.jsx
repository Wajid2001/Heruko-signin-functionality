import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import ReactDOM from "react-dom";

const Home = lazy(() => import("./Pages/Home"));
const Sigin = lazy(() => import("./Pages/Signin"));
const Register = lazy(() => import("./Pages/Register"));

require("./static/layout.scss");

const App = () => {
	const activeClass = " border-blue-500 text-blue-500 ";
	let csrfmiddlewaretoken, csrfCookie;

	useEffect(() => {
		// This will find csrf token
		csrfmiddlewaretoken = document.querySelector("input[name='csrfmiddlewaretoken']").value;
		document.querySelector("input[name='csrfmiddlewaretoken']").remove();
		console.log(csrfmiddlewaretoken);

		// this will find csrf cookie
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, "csrftoken".length + 1) === "csrftoken" + "=") {
					cookieValue = decodeURIComponent(cookie.substring("csrftoken".length + 1));
					break;
				}
			}
		}
		console.log(`csrfCookie : ${cookieValue}`);
		csrfCookie = cookieValue;
	}, []);

	return (
		<>
			<BrowserRouter>
				<div className='mt-4 md:mt-16 mb-8'>
					<div className='flex'>
						<div className='flex mx-auto space-x-2 md:space-x-6'>
							<NavLink exact to='/home' activeClassName={activeClass}>
								Home
							</NavLink>
							<NavLink to='/signin' activeClassName={activeClass}>
								Signin Page
							</NavLink>
							<NavLink to='/register' activeClassName={activeClass}>
								Register Page
							</NavLink>
						</div>
					</div>
					<Suspense fallback={<div className='loading'></div>}>
						<Switch>
							<Route exact path='/home' component={Home} />
							<Route exact path='/signin'>
								<Sigin
									csrfmiddlewaretoken={csrfmiddlewaretoken}
									csrfCookie={csrfCookie}
								/>
							</Route>
							<Route exact path='/register'>
								<Register
									csrfmiddlewaretoken={csrfmiddlewaretoken}
									csrfCookie={csrfCookie}
								/>
							</Route>
						</Switch>
					</Suspense>
				</div>
			</BrowserRouter>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
