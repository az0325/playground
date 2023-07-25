import React, { ReactNode } from 'react';

import Header from '@components/Header';

interface ILayout {
	children: ReactNode;
}

const Layout = (props: ILayout) => {
	const { children } = props;

	return (
		<div className="bg-white justify-center">
			<div style={{ minWidth: '1024px' }}>
				<Header />
				<div className="bg-white text-base-content min-h-screen pb-16">
					<div className="p-3">{children}</div>
				</div>
				{/* {isBottomNav && <BottomNav isMobile={isMobile} />} */}

				{/* 공통영역 */}
				{/* {toast.isOpen && <Toast />}
				{dialog.isOpen && <Dialog />}
				{progress.isOpen && <Progress />} */}
			</div>
		</div>
	);
};

export default Layout;
