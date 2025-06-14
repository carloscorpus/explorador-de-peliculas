import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme.ts';
import { App } from './pages/App.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AllCategoriesStateContex } from './libs/context/AllCategoriesStateContex.tsx';
import { BrowserRouter } from 'react-router-dom';
import { DrawerIsOpenStateContext } from './libs/context/DrawerIsOpenStateContext.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<AllCategoriesStateContex>
				<DrawerIsOpenStateContext>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<App />
					</ThemeProvider>
				</DrawerIsOpenStateContext>
			</AllCategoriesStateContex>
		</BrowserRouter>
	</StrictMode>
);
