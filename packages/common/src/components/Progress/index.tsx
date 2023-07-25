'use client';

import React from 'react';

type TProgress = {};

function Progress(props: TProgress) {
	return (
		<div className="flex justify-center w-full h-full absolute bg-neutral-500/50" style={{ zIndex: 9999 }}>
			<span className="loading loading-dots loading-lg" style={{ background: 'white' }}></span>
		</div>
	);
}

export default Progress;
