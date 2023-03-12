import { Header } from '../components/Header';

import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/Global';
import { theme } from '../styles/Theme';

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Header />
					<AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
						<Component {...pageProps} key={router.asPath} />
					</AnimatePresence>
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}
