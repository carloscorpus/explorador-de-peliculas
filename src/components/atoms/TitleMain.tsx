import { Typography } from '@mui/material';

export const TitleMain = () => {
	return (
		<Typography variant="h6" component={'h1'} sx={{ flexGrow: 1, color: 'secondary.main' }}>
			Free movies
		</Typography>
	);
};
