import RecoilProvider from './RecoilProvider';
import './globals.css';

export default function RootLayout({ children }: { children: JSX.Element }) {
	return (
		<html lang="en-us">
			<body>
				<RecoilProvider>{children}</RecoilProvider>
			</body>
		</html>
	);
}
