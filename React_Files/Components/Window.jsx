import React from "react";

const Window = (props) => {
	return (
		<div className='shadow-lg rounded-xl mx-auto max-w-lg'>
			<div className='rounded-xl ring-1 ring-black ring-opacity-5 overflow-y-hidden'>
				<div className='py-2 grid items-center gap-6 px-4 rounded-tr-xl sm:rounded-t-xl bg-gradient-to-b from-gray-50 to-gray-100'>
					<div className='flex space-x-1.5'>
						<div className='w-3 h-3 rounded-full bg-gray-300'></div>
						<div className='w-3 h-3 rounded-full bg-gray-300'></div>
						<div className='w-3 h-3 rounded-full bg-gray-300'></div>
					</div>
					<div className='border border-black border-opacity-5 rounded-md overflow-hidden shadow-sm'>
						<div className='bg-gradient-to-b from-white to-gray-50 text-sm py-1.5 text-center'>
							{props.title}
						</div>
					</div>
				</div>
				{props.content}
			</div>
		</div>
	);
};

export default Window;
