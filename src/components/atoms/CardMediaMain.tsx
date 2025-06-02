import { CardMedia, type SxProps, type Theme } from '@mui/material';
import errorImg from '../../assets/errorImage.jpg';
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
				e.currentTarget.src = `${errorImg}`;
			}}
		/>
	);
};
