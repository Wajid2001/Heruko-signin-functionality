import React, { useEffect } from "react";

export default function Register(props) {
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
				<h1 className='text-2xl -mt-2'>Register</h1>
				<div className='flex space-x-4'>
					<div>
						<label>First Name</label>
						<input type='first_name' />
					</div>
					<div>
						<label>Last Name</label>
						<input type='last_name' />
					</div>
				</div>
				<div>
					<label>Email</label>
					<input type='email' placeholder='example@mail.com' />
				</div>
				<div>
					<label>Password</label>
					<input type='password' />
				</div>
				<div>
					<label>Confirm Password</label>
					<input type='cpassword' />
				</div>
				<button className='btn-primary w-full'>Create New Account </button>
			</form>
		</>
	);
}
