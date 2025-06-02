import { useNavigate, useParams } from 'react-router-dom';
import { useMovieDetail } from '../../libs/hooks/useMovieDetail';
import { CardMain } from '../atoms/CardMain';
import { Box, Button, CardActions } from '@mui/material';
import { TitleMain } from '../atoms/TitleMain';
import { ListItemCard } from '../molecules/ListItemCard';
import { CardMediaMain } from '../atoms/CardMediaMain';
import { ContainerApp } from '../atoms/ContainerApp';
import { CardContentMain } from '../atoms/CardContentMain';
import { CardListMain } from '../atoms/CardListMain';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieEditIcon from '@mui/icons-material/MovieEdit';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { LoadingDetailMovie } from './LoadingDetailMovie';
import { ErrorPage } from './ErrorPage';
export const DisplayMovieDetail = () => {
	const { movie } = useParams();
	const { data, loading, error } = useMovieDetail(movie);
	const navigate = useNavigate();

	return (
		<>
			{data?.Response === 'False' && (
				<ErrorPage
					status={error.status || 503}
					statusText="No results were found for your search. Return to the main page"
					message="No results found"
				/>
			)}
			{loading && <LoadingDetailMovie />}
			{data?.Response === 'True' && !loading && (
				<ContainerApp disableGutters={false} component={'main'} sx={{ mt: { xs: 3, md: 0 } }}>
					<CardMain
						sx={{
							p: '1em',
							display: 'flex',
							alignItems: 'start',
							flexDirection: { xs: 'column', md: 'row' },
						}}
					>
						<CardMediaMain
							sx={{ minWidth: { md: '375px' }, maxWidth: { xs: '375px' } }}
							image={data?.Poster}
							alt={`Poster of ${data?.Title}`}
							title={data?.Title}
						/>
						<Box>
							<CardContentMain>
								<TitleMain
									variant="h6"
									component={'h2'}
									sx={{
										fontSize: {
											xs: '1.3rem',
											sm: '1.75rem',
											md: '2.5rem',
											lg: '3.75rem',
										},
										color: 'secondary.main',
									}}
								>
									{data?.Title}
								</TitleMain>
								<TitleMain component={'p'}>
									{data?.Plot !== 'N/A' ? data?.Plot : 'No description'}
								</TitleMain>
								<CardListMain>
									<ListItemCard
										type="Premier"
										data={data?.Released}
										iconCard={<CalendarMonthIcon />}
									/>
									<ListItemCard type="Category" data={data?.Type} iconCard={<MovieEditIcon />} />
									<ListItemCard
										type="Duration"
										data={data?.Runtime}
										iconCard={<QueryBuilderIcon />}
									/>
									<ListItemCard type="Genre" data={data?.Genre} iconCard={<LocalMoviesIcon />} />
									<ListItemCard
										type="Director"
										data={data?.Director}
										iconCard={<PersonOutlineOutlinedIcon />}
									/>
									<ListItemCard type="Actors" data={data?.Actors} iconCard={<GroupOutlinedIcon />} />
									<ListItemCard
										type="Language"
										data={data?.Language}
										iconCard={<LanguageOutlinedIcon />}
									/>
									<ListItemCard
										type="Awards"
										data={data?.Awards}
										iconCard={<EmojiEventsOutlinedIcon />}
									/>
									<ListItemCard
										type="BoxOffice"
										data={data?.BoxOffice}
										iconCard={<MonetizationOnOutlinedIcon />}
									/>
								</CardListMain>
								<CardActions>
									<Button
										onClick={() => {
											navigate(-1);
										}}
										sx={{ color: 'text.primary' }}
										variant="contained"
										color="inherit"
									>
										Back
									</Button>
								</CardActions>
							</CardContentMain>
						</Box>
					</CardMain>
				</ContainerApp>
			)}
		</>
	);
};
