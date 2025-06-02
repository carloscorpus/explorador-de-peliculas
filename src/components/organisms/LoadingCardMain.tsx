import { Grid, Skeleton } from '@mui/material';
import { CardContentMain } from '../atoms/CardContentMain';
import { CardListMain } from '../atoms/CardListMain';
import { CardActionsMain } from '../atoms/CardActionsMain';
import { ContainerApp } from '../atoms/ContainerApp';

export const LoadingCardMain = () => {
	return (
		<>
			<ContainerApp component={'main'} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
				<Grid container spacing={3} component={'section'} justifyContent={'center'}>
					{Array.from({ length: 10 }).map((_, index) => {
						return (
							<Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }} component={'article'}>
								<Skeleton variant="rectangular" sx={{ height: 320 }} />
								<CardContentMain sx={{ flexGrow: 1 }}>
									<Skeleton sx={{ height: 40 }} />

									<CardListMain>
										<Skeleton sx={{ height: 20 }} />
										<Skeleton sx={{ height: 20 }} />
									</CardListMain>
								</CardContentMain>
								<CardActionsMain>
									<Skeleton sx={{ width: 220 }} />
									<Skeleton sx={{ width: 220 }} />
								</CardActionsMain>
							</Grid>
						);
					})}
				</Grid>
			</ContainerApp>
		</>
	);
};
