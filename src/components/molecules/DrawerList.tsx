import { Drawer } from '@mui/material';
import { NavbarListDrawer } from '../organisms/NavbarListDrawer';
import { useContextDrawerIsOpen } from '../../libs/hooks/useContextDrawerIsOpen';

export const DrawerList = () => {
    const { openDrawer, setOpenDrawer } = useContextDrawerIsOpen();
	return (
		<Drawer
			open={openDrawer}
			anchor="left"
			onClose={() => setOpenDrawer(false)}
			sx={{ display: { xs: 'flex', md: 'none' } }}
		>
			<NavbarListDrawer />
		</Drawer>
	);
};
