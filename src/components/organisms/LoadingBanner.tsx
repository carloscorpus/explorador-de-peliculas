import { Box, Skeleton } from '@mui/material';
import { CardMain } from '../atoms/CardMain';
import { ContainerApp } from '../atoms/ContainerApp';
import { CardContentMain } from '../atoms/CardContentMain';
import { CardActionsMain } from '../atoms/CardActionsMain';

export const LoadingBanner = () => {
	return (
		<ContainerApp disableGutters={false} component={'div'}>
			<CardMain
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: { xs: 'column', sm: 'row' },
					padding: { xs: 0, sm: '1rem' },
				}}
			>
				<Skeleton variant="rectangular" height={320} width={320} />

				<Box>
					<CardContentMain>
						<Skeleton variant="rectangular" sx={{ my: '0.5em' }} width={300} />
						<Skeleton variant="rectangular" sx={{ my: '0.5em' }} width={320} />
						<Skeleton variant="rectangular" sx={{ my: '0.5em' }} width={320} />
						<Skeleton variant="rectangular" sx={{ my: '0.5em' }} width={320} />
						<Skeleton variant="rectangular" sx={{ my: '0.5em' }} width={320} />
						<Skeleton variant="rectangular" sx={{ my: '0.5em' }} width={320} />
						<CardActionsMain>
							<Skeleton variant="rectangular" sx={{ width: 40 }} />
						</CardActionsMain>
					</CardContentMain>
				</Box>
			</CardMain>
		</ContainerApp>
	);
};
