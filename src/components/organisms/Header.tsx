import { AppBar, Box, Container, List, Toolbar } from '@mui/material';
import { useState } from 'react';
import { LogoMain } from '../atoms/LogoMain';
import { TitleMain } from '../atoms/TitleMain';
import { HamburgerButton } from '../atoms/HamburgerButton';
import { DrawerList } from '../molecules/DrawerList';
import { TypeCategoryMovie } from '../molecules/TypeCategoryMovie';

export const Header = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<>
			<AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
				<Container maxWidth={'xl'} disableGutters>
					<Toolbar>
						<LogoMain />
						<TitleMain />
						<Box sx={{ display: { xs: 'none', md: 'block' } }}>
							<List sx={{ display: 'flex' }}>
								<TypeCategoryMovie text={true} />
							</List>
						</Box>
						<HamburgerButton setOpenDrawer={setOpenDrawer} />
					</Toolbar>
				</Container>
			</AppBar>

			<DrawerList openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
		</>
	);
};
