'use client';

import React from 'react';

import Progress from '@components/Progress';
import Alert from '@components/Alert';
import Dialog from '@components/Dialog';

function App() {
	return (
		<>
			<div className="w-full min-h-screen">
				{/* <Progress /> */}
				<Alert type="info" message="hello" />
				{/* <Dialog /> */}
				{/* <Dialog
					title="sdfsdf"
					message="sdfsdfsdfsdfsd"
					onConfirm={() => {
						console.log('confirm');
					}}
				/> */}
				<div className="mockup-window border bg-base-300">
					<div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
				</div>
			</div>
		</>
	);
}

export default App;
