import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContextAllMovies } from '../../libs/hooks/useContextAllCategories';

export const LogoMain = () => {
	const navigate = useNavigate();

	const { setMovie } = useContextAllMovies();
	const _handleOnClick = () => {
		setMovie('barbie');
		navigate('/allmovies?page=1');
	};

	return (
		<IconButton onClick={_handleOnClick}>
			<TheaterComedyIcon sx={{ color: 'secondary.main' }} />
		</IconButton>
	);
};
