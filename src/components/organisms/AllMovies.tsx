import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, List, Typography } from '@mui/material';
import type { ApiErrorType } from '../../libs/const/ErrorApiType';
import type { URLAPIResponseID } from '../../libs/types/typeAllMoviesSearch';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieEditIcon from '@mui/icons-material/MovieEdit';
import { ListItemCard } from '../molecules/ListItemCard';
import { capitalize } from '../../libs/helpers/capitalize';
type AllMoviesProps = {
	data: URLAPIResponseID | null;
	error: ApiErrorType;
	loading: boolean;
};

export const AllMovies = ({ data, error, loading }: AllMoviesProps) => {
	console.log(data, error, loading);
	return (
		<>
			<Container maxWidth={'xl'} component={'main'}>
				<Grid container spacing={3} component={'section'} justifyContent={'center'}>
					{data?.Response === 'True' &&
						data.Search.map((movie) => {
							return (
								<Grid
									key={movie.imdbID}
									size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
									component={'article'}
									title={movie.Title}
									aria-labelledby={`movie-${movie.imdbID}-title`}
								>
									<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
										<CardMedia
											component="img"
											alt={`Poster of ${movie.Title}`}
											height={150}
											image={movie.Poster}
										/>
										<CardContent sx={{ flexGrow: 1 }}>
											<Typography
												variant="h6"
												component={'h2'}
												id={`movie-${movie.imdbID}-title`}
												sx={{ color: 'secondary.main' }}
											>
												{movie.Title}
											</Typography>
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
											<Button sx={{ color: 'text.primary' }} variant="contained" color="inherit">
												Summary
											</Button>
											<Button sx={{ color: 'text.primary' }} variant="contained" color="inherit">
												All details
											</Button>
										</CardActions>
									</Card>
								</Grid>
							);
						})}
				</Grid>
			</Container>
		</>
	);
};
