import React, { useEffect } from "react";

export default function Signin(props) {
	const csrfmiddlewaretoken = props.csrfmiddlewaretoken;
	const csrfCookie = props.csrfCookie;

	useEffect(() => {
		if (!csrfCookie && !csrfmiddlewaretoken) {
			document.querySelector("body").innerHTML = "";
			alert("Security Layer not found");
		}
	}, []);

	return (
		<>
			<form className='mx-auto my-12 md:my-16 p-6 bg-white space-y-4 max-w-sm  rounded-lg shadow-md'>
				<h1 className='text-2xl -mt-2'>Login</h1>
				<div>
					<label>Email</label>
					<input type='email' placeholder='example@mail.com' />
				</div>
				<div>
					<label>Password</label>
					<input type='password' placeholder='● ● ● ●' />
				</div>
				<button className='btn-primary w-full'>Sign In</button>
			</form>
		</>
	);
}
