import { CardMedia, type SxProps, type Theme } from '@mui/material';
type CardMediaMainType = {
	sx?: SxProps<Theme>;
	image?: string | undefined;
	alt?: string | undefined;
	title?: string | undefined;
};
export const CardMediaMain = ({ sx = {}, image, alt, title = '' }: CardMediaMainType) => {
	return (
		<CardMedia
			sx={sx}
			component={'img'}
			image={image}
			alt={alt}
			title={title}
			onError={(e) => {
				e.currentTarget.src = `https://placehold.co/300x400?text=${title ? title : alt} :(`;
			}}
		/>
	);
};
