import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			//maneja el header
			main: '#010101',
		},
		secondary: {
			//maneja text secundary
			main: '#25db01',
		},
		background: {
			//maneja el bg del main
			default: '#111111',
			//maneja las cards
			paper: '#1c1c1c',
		},
		text: {
			//maneja text primary
			primary: '#f2f2f2',
		},
	},
});
