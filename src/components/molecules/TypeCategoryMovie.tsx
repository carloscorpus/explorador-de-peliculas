import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TypesMovies } from '../../libs/const/SearchType';

type TypeCategoryMovieProps = {
	text?: boolean;
	icon?: boolean;
};

export const TypeCategoryMovie = ({ text, icon }: TypeCategoryMovieProps) => {
	return (
		<>
			{TypesMovies.map((type, i) => {
				return (
					<ListItem key={i} sx={{ color: 'text.primary' }} disablePadding>
						<ListItemButton component="a" href="#">
							{icon && <ListItemIcon>{type.icon}</ListItemIcon>}
							{text && <ListItemText primary={type.type} />}
						</ListItemButton>
					</ListItem>
				);
			})}
		</>
	);
};
