import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#2b2b2b',
			contrastText: '#ffffff',
			light: '#c5c5c5',
			dark: '#181818',
		},
		secondary: {
			main: '#f2f2f2',
		},
		background: {
			default: '#242424',
			paper: '#2b2b2b',
		},
		text: {
			primary: '#f2f2f2',
		},
	},
});
