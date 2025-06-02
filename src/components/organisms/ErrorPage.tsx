import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import imgError from '../../assets/PageNotFound.svg';
import { useContextAllMovies } from '../../libs/hooks/useContextAllCategories';
type ErrorPageProps = {
	status: string | number;
	statusText: string;
	message: string;
};

export const ErrorPage = ({ status, statusText, message }: ErrorPageProps) => {
	const { setMovie } = useContextAllMovies();
	const _handleOnClick = () => setMovie('batman');
	return (
		<Container maxWidth={'xl'}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexWrap: 'wrap',
					gap: 2,
					margin: '1rem 0',
				}}
			>
				<Box>
					<Typography variant="body1">ERROR CODE {status}.</Typography>
					<Typography
						variant="h2"
						sx={{ color: 'secondary.main', fontSize: { xs: '2rem', md: '3.5rem', lg: '4.5rem' } }}
						gutterBottom
					>
						{message}.
					</Typography>
					<Typography variant="body1">{statusText}.</Typography>
					<Button
						component={Link}
						to="/allmovies?page=1"
						onClick={_handleOnClick}
						variant="contained"
						sx={{ margin: '0.5rem 0', bgcolor: 'secondary.main', color: 'background.default' }}
					>
						Home
					</Button>
				</Box>
				<Box sx={{ width: 320, textAlign: 'center' }}>
					<Box component={'img'} src={imgError} alt="Web illustration from Storyset" title="Storyset" />
					<Box component={'a'} href="https://storyset.com/web" target="_blank" rel="noopener noreferrer">
						Web illustrations by Storyset
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
