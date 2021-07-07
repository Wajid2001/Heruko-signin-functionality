import React from "react";
import Window from "../Components/Window";

const imgUrl =
	"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

export default function Home() {
	return (
		<div className='mt-16'>
			<Window title={<>./home</>} content={<img className='w-full' src={imgUrl} />} />
		</div>
	);
}
