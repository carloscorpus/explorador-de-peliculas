import { Box, Divider, List } from '@mui/material';
import { TypeCategoryMovie } from '../molecules/TypeCategoryMovie';
import { SearchMovie } from './SearchMovie';
export const NavbarListDrawer = () => {
	return (
		<>
			<Box sx={{ width: 320, height: '100%', bgcolor: 'background.paper' }}>
				<nav>
					<List>
						<TypeCategoryMovie icon={true} text={true} />
						<Divider />
						<SearchMovie xs="block" md="none" />
					</List>
				</nav>
			</Box>
		</>
	);
};
