import { Box, Skeleton } from '@mui/material';
import { CardMain } from '../atoms/CardMain';
import { ContainerApp } from '../atoms/ContainerApp';
import { CardContentMain } from '../atoms/CardContentMain';

export const LoadingDetailMovie = () => {
	return (
		<ContainerApp disableGutters={false} component="main">
			<CardMain
				sx={{
					p: '1em',
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: { xs: 'column', md: 'row' },
					gap: 2,
				}}
			>
				{/* Imagen del póster */}
				<Box
					sx={{
						width: '100%',
						maxWidth: { xs: '100%', sm: 375 },
						flexShrink: 0,
					}}
				>
					<Skeleton
						variant="rectangular"
						width="100%"
						sx={{
							height: { xs: 300, sm: 375, md: 500 },
							borderRadius: 2,
						}}
					/>
				</Box>

				{/* Contenido */}
				<CardContentMain sx={{ flex: 1, width: '100%' }}>
					{/* Título */}
					<Skeleton width="80%" height={40} sx={{ mb: 2 }} />

					{/* Plot / descripción */}
					<Skeleton width="100%" height={24} sx={{ mb: 1 }} />
					<Skeleton width="90%" height={24} sx={{ mb: 1 }} />

					{/* Lista de detalles */}
					{Array.from({ length: 5 }).map((_, index) => (
						<Skeleton key={index} width="100%" height={28} sx={{ mb: 1, borderRadius: 1 }} />
					))}

					{/* Botón */}
					<Skeleton width={100} height={36} sx={{ mt: 2, borderRadius: 1 }} />
				</CardContentMain>
			</CardMain>
		</ContainerApp>
	);
};
