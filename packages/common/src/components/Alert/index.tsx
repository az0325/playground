'use client';

import React, { useState } from 'react';

import { TbInfoCircle, TbCircleCheck, TbAlertCircle, TbCircleX } from 'react-icons/tb';

type TAlert = {
	type: 'info' | 'success' | 'warning' | 'error';
	message: string;
};

const ICON = {
	info: <TbInfoCircle size="1.5em" color="blue" />,
	success: <TbCircleCheck size="1.5em" color="green" />,
	warning: <TbAlertCircle size="1.5em" color="orange" />,
	error: <TbCircleX size="1.5em" color="red" />
};

const Alert = (props: TAlert) => {
	const { type, message } = props;

	const [isShow, setIsShow] = useState(true);

	setTimeout(() => {
		// setIsShow(false);
	}, 5000);

	return isShow ? (
		<div className="flex w-full absolute px-3 py-3" style={{ zIndex: 100 }}>
			<div className="alert">
				{ICON[type]}
				<span>{message}</span>
			</div>
		</div>
	) : (
		<></>
	);
};

export default Alert;
