import MovieEditIcon from '@mui/icons-material/MovieEdit';
import { Button, Grid } from '@mui/material';
import { capitalize } from '../../libs/helpers/capitalize';
import { ListItemCard } from '../molecules/ListItemCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { PaginationMain } from '../molecules/PaginationMain';
import { useContextAllMovies } from '../../libs/hooks/useContextAllCategories';
import { ErrorPage } from './ErrorPage';
import { CardMain } from '../atoms/CardMain';
import { ContainerApp } from '../atoms/ContainerApp';
import { TitleMain } from '../atoms/TitleMain';
import { BannerMain } from './BannerMain';
import { DialogApp } from '../molecules/DialogApp';
import { useState } from 'react';
import { CardMediaMain } from '../atoms/CardMediaMain';
import { CardContentMain } from '../atoms/CardContentMain';
import { CardListMain } from '../atoms/CardListMain';
import { CardActionsMain } from '../atoms/CardActionsMain';
import { BtnAllDeatils } from '../atoms/BtnAllDeatils';
import { LoadingCardMain } from './LoadingCardMain';

export const AllMovies = () => {
	const [movieSelectedModal, setMovieSelectedModal] = useState('');
	const { data, error, loading } = useContextAllMovies();

	const [open, setOpen] = useState(false);

	const _handleOnClick = (id: string) => {
		setMovieSelectedModal(id);
		setOpen(true);
	};
	const _handleClickClose = () => {
		setOpen(false);
		setMovieSelectedModal('');
	};

	return (
		<>
			{data?.Response === 'False' && (
				<ErrorPage
					status={error.status || 503}
					statusText="No results were found for your search. Return to the main page"
					message="No results found"
				/>
			)}
			{loading && <LoadingCardMain />}
			{!loading && data?.Response === 'True' && (
				<>
					<BannerMain />
					<ContainerApp component={'main'} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
						<Grid container spacing={3} component={'section'} justifyContent={'center'}>
							{data.Search.map((movie) => {
								return (
									<Grid
										key={movie.imdbID}
										size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
										component={'article'}
										title={movie.Title}
										aria-labelledby={`movie-${movie.imdbID}-title`}
										id={`movie-${movie.imdbID}-title`}
									>
										<CardMain sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
											<CardMediaMain
												sx={{ height: 320 }}
												image={movie.Poster}
												alt={`Poster of ${movie.Title}`}
											/>
											<CardContentMain sx={{ flexGrow: 1 }}>
												<TitleMain
													variant="h6"
													component={'h2'}
													sx={{ color: 'secondary.main' }}
												>
													{movie.Title}
												</TitleMain>
												<CardListMain>
													<ListItemCard
														type="Premiere"
														data={movie.Year}
														iconCard={<CalendarMonthIcon />}
													/>
													<ListItemCard
														type={`Category`}
														data={capitalize(movie.Type)}
														iconCard={<MovieEditIcon />}
													/>
												</CardListMain>
											</CardContentMain>
											<CardActionsMain>
												<Button
													onClick={() => {
														_handleOnClick(movie.imdbID ? movie.imdbID : '');
													}}
													sx={{ color: 'text.primary' }}
													variant="contained"
													color="inherit"
												>
													Summary
												</Button>

												<BtnAllDeatils id={movie.imdbID} />
											</CardActionsMain>
										</CardMain>
									</Grid>
								);
							})}
						</Grid>
						<PaginationMain />
					</ContainerApp>
					<DialogApp
						open={open}
						_handleClickClose={_handleClickClose}
						movieSelectedModal={movieSelectedModal}
					/>
				</>
			)}
		</>
	);
};
