import { Box, Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { CardMain } from '../atoms/CardMain';
import { useApi } from '../../libs/hooks/useApi';
import type { URLAPIMovie } from '../../libs/types/typeMovie';
import { ListItemCard } from '../molecules/ListItemCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieEditIcon from '@mui/icons-material/MovieEdit';
import { ContainerApp } from '../atoms/ContainerApp';
import { TitleMain } from '../atoms/TitleMain';

export const BannerMain = () => {
	const API_KEY_OMDB = import.meta.env.VITE_API_KEY_OMDB;
	const URL_OMDB = `http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&i=tt3896198&plot=full`;
	const { data } = useApi<URLAPIMovie>(URL_OMDB);

	return (
		<>
			{data?.Response === 'True' && (
				<ContainerApp disableGutters={false} component={'div'}>
					<CardMain
						sx={{
							display: 'flex',
							alignItems: 'center',
							mt: 3,
							padding: { xs: 0, sm: '1rem' },
							flexDirection: { xs: 'column', sm: 'row' },
						}}
					>
						<CardMedia
							component="img"
							alt={`Poster of ${data.Title}`}
							title={data.Title}
							image={data.Poster}
							sx={{ height: { xs: 320, md: '100%' }, minWidth: { sm: 220 }, maxWidth: { sm: 320 } }}
						/>

						<Box>
							<CardContent>
								<TitleMain
									variant="h6"
									component={'h2'}
									sx={{
										fontSize: {
											xs: '1.3rem',
											sm: '1.75rem',
											md: '2.5rem',
											lg: '3rem',
										},
										color: 'secondary.main',
									}}
								>
									{data.Title}
								</TitleMain>
								<ListItemCard data={data.Released} type="Premier" iconCard={<CalendarMonthIcon />} />
								<ListItemCard data={data.Type} type="Category" iconCard={<MovieEditIcon />} />

								<TitleMain
									component={'p'}
									sx={{
										overflow: 'hidden',
										display: '-webkit-box',
										WebkitBoxOrient: 'vertical',
										WebkitLineClamp: 2,
									}}
								>
									{data.Plot}
								</TitleMain>
							</CardContent>

							<CardActions>
								<Button sx={{ color: 'text.primary' }} variant="contained" color="inherit">
									All details
								</Button>
							</CardActions>
						</Box>
					</CardMain>
				</ContainerApp>
			)}
		</>
	);
};
