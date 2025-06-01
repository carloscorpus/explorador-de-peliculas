import MovieEditIcon from '@mui/icons-material/MovieEdit';
import { Button, CardActions, CardContent, CardMedia, Grid, List } from '@mui/material';
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

export const AllMovies = () => {
	const [movieSelected, setMovieSelected] = useState<string>('');
	const { data, error } = useContextAllMovies();
	const [open, setOpen] = useState(false);

	const _handleOnClick = (id: string) => {
		if (id !== '') {
			setOpen(true);
			setMovieSelected(id);
			return;
		}
	};

	const _handleClickClose = () => {
		setOpen(false);
		setMovieSelected('');
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
			{data?.Response === 'True' && (
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
											<CardMedia
												component="img"
												alt={`Poster of ${movie.Title}`}
												sx={{ height: 320 }}
												image={movie.Poster}
												onError={(e) => {
													e.currentTarget.src = `https://placehold.co/600x400?text=${movie.Title} :(`;
												}}
											/>

											<CardContent sx={{ flexGrow: 1 }}>
												<TitleMain
													component={'h2'}
													variant="h6"
													sx={{ color: 'secondary.main' }}
												>
													{movie.Title}
												</TitleMain>
												<List>
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
												</List>
											</CardContent>

											<CardActions>
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
												<Button
													sx={{ color: 'text.primary' }}
													variant="contained"
													color="inherit"
												>
													All details
												</Button>
											</CardActions>
										</CardMain>
									</Grid>
								);
							})}
						</Grid>
						<PaginationMain />
					</ContainerApp>
					<DialogApp open={open} _handleClickClose={_handleClickClose} movieSelected={movieSelected} />
				</>
			)}
		</>
	);
};
