import { AppBar, Box, List, Toolbar } from '@mui/material';
import { LogoMain } from '../atoms/LogoMain';
import { TitleMain } from '../atoms/TitleMain';
import { HamburgerButton } from '../atoms/HamburgerButton';
import { DrawerList } from '../molecules/DrawerList';
import { RedesSociales } from '../molecules/RedesSociales';
import { ContainerApp } from '../atoms/ContainerApp';

export const Header = () => {
	return (
		<>
			<AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
				<ContainerApp disableGutters={true} component={'div'}>
					<Toolbar>
						<LogoMain />
						<TitleMain component={'h1'} variant="h6" sx={{ flexGrow: 1, color: 'secondary.main' }}>
							Free movie
						</TitleMain>
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<List sx={{ display: 'flex' }}>
								<RedesSociales icon={true} />
							</List>
						</Box>
						<HamburgerButton />
					</Toolbar>
				</ContainerApp>
			</AppBar>

			<DrawerList />
		</>
	);
};
