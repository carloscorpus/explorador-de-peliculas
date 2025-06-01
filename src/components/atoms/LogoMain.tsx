import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContextAllMovies } from '../../libs/hooks/useContextAllCategories';

export const LogoMain = () => {
	const { setMovie } = useContextAllMovies();
	const _handleOnClick = () => setMovie('batman');

	return (
		<Box component={Link} to="/allmovies?page=1" onClick={_handleOnClick}>
			<IconButton>
				<TheaterComedyIcon sx={{ color: 'secondary.main' }} />
			</IconButton>
		</Box>
	);
};
