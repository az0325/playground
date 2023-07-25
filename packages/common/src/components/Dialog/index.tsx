'use client';

import React, { useState } from 'react';

type TDialog = {
	title: string;
	message: string;
	onConfirm: () => void;
};

function Dialog(props: TDialog) {
	const { title, message, onConfirm } = props;

	const [show, setShow] = useState(false);

	const _handleDialog = (type: string) => {
		if (type === 'confirm') onConfirm();
		setShow(false);
	};

	return show ? (
		<div className="flex justify-center items-center w-full h-full absolute bg-neutral-00/50" style={{ zIndex: 100 }}>
			<div className="card w-96 bg-neutral text-neutral-content">
				<div className="card-body items-center text-center">
					<h2 className="card-title">{title}</h2>
					<p>{message}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary" onClick={() => _handleDialog('confirm')}>
							확인
						</button>
						<button className="btn" onClick={() => _handleDialog('cancel')}>
							취소
						</button>
					</div>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}

export default Dialog;
