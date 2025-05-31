import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TypesMovies } from '../../libs/const/SearchType';

type TypeCategoryMovieProps = {
	text?: boolean;
	icon?: boolean;
};

export const RedesSociales = ({ text, icon }: TypeCategoryMovieProps) => {
	return (
		<>
			{TypesMovies.map((type, i) => {
				return (
					<ListItem key={i} sx={{ color: 'text.primary' }} disablePadding>
						<ListItemButton component="a" href={type.url} target="_blank" rel="noopener noreferrer">
							{icon && (
								<ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
									{type.icon}
								</ListItemIcon>
							)}
							{text && <ListItemText primary={type.type} />}
						</ListItemButton>
					</ListItem>
				);
			})}
		</>
	);
};
