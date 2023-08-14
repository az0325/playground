import React from 'react';

export interface IProgress {}

const Progress = (props: IProgress) => {
	return (
		<div className="min-w-screen min-h-screen absolute">
			<span className="loading loading-dots loading-lg"></span>
		</div>
	);
};

export default Progress;
