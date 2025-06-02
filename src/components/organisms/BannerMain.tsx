import { Box } from '@mui/material';
import { CardMain } from '../atoms/CardMain';
import { ListItemCard } from '../molecules/ListItemCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieEditIcon from '@mui/icons-material/MovieEdit';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { ContainerApp } from '../atoms/ContainerApp';
import { TitleMain } from '../atoms/TitleMain';
import { useMovieDetailBanner } from '../../libs/hooks/useMovieDetailBanner';
import { CardMediaMain } from '../atoms/CardMediaMain';
import { CardContentMain } from '../atoms/CardContentMain';
import { CardListMain } from '../atoms/CardListMain';
import { CardActionsMain } from '../atoms/CardActionsMain';
import { BtnAllDeatils } from '../atoms/BtnAllDeatils';

export const BannerMain = () => {
	const { data } = useMovieDetailBanner();

	return (
		<>
			{data?.Response === 'True' && (
				<ContainerApp disableGutters={false} component={'div'}>
					<CardMain
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: { xs: 'column', sm: 'row' },
							padding: { xs: 0, sm: '1rem' },
						}}
					>
						<CardMediaMain
							sx={{ height: { xs: 320, md: '100%' }, minWidth: { sm: 220 }, maxWidth: { sm: 320 } }}
							image={data.Poster}
							alt={`Poster of ${data.Title}`}
							title={data.Title}
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
									{data.Title}
								</TitleMain>
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
								<CardListMain>
									<ListItemCard
										type="Premier"
										data={data.Released}
										iconCard={<CalendarMonthIcon />}
									/>
									<ListItemCard type="Category" data={data.Type} iconCard={<MovieEditIcon />} />
									<ListItemCard type="Duration" data={data.Runtime} iconCard={<QueryBuilderIcon />} />
								</CardListMain>
							</CardContentMain>

							<CardActionsMain>
								<BtnAllDeatils id={data.imdbID} />
							</CardActionsMain>
						</Box>
					</CardMain>
				</ContainerApp>
			)}
		</>
	);
};
