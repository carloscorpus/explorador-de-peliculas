import { AppBar, Box, List, Toolbar } from '@mui/material';
import { useState } from 'react';
import { LogoMain } from '../atoms/LogoMain';
import { TitleMain } from '../atoms/TitleMain';
import { HamburgerButton } from '../atoms/HamburgerButton';
import { DrawerList } from '../molecules/DrawerList';
import { TypeCategoryMovie } from '../molecules/TypeCategoryMovie';
import { ContainerApp } from '../atoms/ContainerApp';

export const Header = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<>
			<AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
				<ContainerApp disableGutters={true} component={'div'}>
					<Toolbar>
						<LogoMain />
						<TitleMain component={'h1'} variant="h6" sx={{ flexGrow: 1, color: 'secondary.main' }}>
							Free movie
						</TitleMain>
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<List sx={{ display: 'flex' }}>
								<TypeCategoryMovie text={true} />
							</List>
						</Box>
						<HamburgerButton setOpenDrawer={setOpenDrawer} />
					</Toolbar>
				</ContainerApp>
			</AppBar>

			<DrawerList openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
		</>
	);
};
