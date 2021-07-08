import React, { useEffect, useState } from "react";

export default function Register(props) {
	const csrfmiddlewaretoken = props.csrfmiddlewaretoken;
	const csrfCookie = props.csrfCookie;

	useEffect(() => {
		if (!csrfCookie && !csrfmiddlewaretoken) {
			document.querySelector("body").innerHTML = "";
			alert("Security Layer not found");
		}
	}, []);

	let formData = {}; // This will store important data send to server
	let registerBtnData = ""; // This will store restore state for sign in button

	const LoadingAndFetchData = () => {
		// Storing data from form to formData variable as object
		document.querySelectorAll("#authenticationForm input").forEach((e) => {
			formData[e.name] = e.value;
		});

		// Changing singinbtn state to loading
		const registerBtn = document.querySelector("#submitAuthenticationBtn");
		registerBtnData = registerBtn.innerHTML;
		registerBtn.innerHTML = "<div class='loading'></div>";
	};

	// This will restore the sign btn state to previous one
	const resetResgisterBtn = () => {
		const registerBtn = document.querySelector("#submitAuthenticationBtn");
		registerBtn.innerHTML = registerBtnData;
	};

	// This will ensure if the both the passwords are same
	const [error, setError] = useState("");
	function checkPass() {
		setError("");

		const a = document.querySelector("input[name='password']");
		const b = document.querySelector("input[name='confirmuserpassword']");
		if (b.value != a.value) {
			setError("Both password must match");
			return false;
		} else {
			return true;
		}
	}

	const SubmitForm = () => {
		if (checkPass()) {
			LoadingAndFetchData();
			fetch("./api/account/register", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json; charset=UTF-8",
					"X-CSRFToken": csrfmiddlewaretoken,
				},
				body: JSON.stringify(formData),
			})
				.then((r) => r.json())
				.then((data) => {
					/*
					 * This will work only
					 * if there is any type of error
					 * else the user will be redirected to index page
					 */
					resetResgisterBtn();
					console.log(data);
					if (data.error) {
						setError(data.error);
					} else {
						location.replace("./");
					}
				})
				.catch((e) => {
					resetResgisterBtn();
					console.log(`There is a catch ${e}`);
				});
		}
	};

	return (
		<>
			<form
				id='authenticationForm'
				onSubmit={(e) => {
					e.preventDefault();
					SubmitForm();
				}}
				className='mx-auto my-12 md:my-16 p-6 bg-white space-y-4 max-w-sm  rounded-lg shadow-md'
			>
				<h1 className='text-2xl -mt-2'>Register</h1>
				{error !== "" ? (
					<div className='text-md text-red-500 font-bold'>{error}</div>
				) : (
					<></>
				)}
				<div className='flex space-x-4'>
					<div>
						<label>First Name</label>
						<input type='text' name='first_name' />
					</div>
					<div>
						<label>Last Name</label>
						<input type='text' name='last_name' />
					</div>
				</div>
				<div>
					<label>Email</label>
					<input type='email' name='email' placeholder='example@mail.com' />
				</div>
				<div>
					<label>Password</label>
					<input type='password' name='password' />
				</div>
				<div>
					<label>Confirm Password</label>
					<input type='password' name='confirmuserpassword' />
				</div>
				<button id='submitAuthenticationBtn' type='submit' className='btn-primary w-full'>
					Create New Account
				</button>
			</form>
		</>
	);
}
